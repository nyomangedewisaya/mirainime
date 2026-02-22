const ANILIST_API_URL = 'https://graphql.anilist.co';

interface FetchAniListParams {
  query: string;
  variables?: Record<string, any>;
}

export async function fetchFromAniList({ query, variables = {} }: FetchAniListParams) {
  try {
    const response = await fetch(ANILIST_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await response.json();

    if (json.errors) {
      console.error('AniList API Error:', json.errors);
      throw new Error('Failed to fetch data from AniList');
    }

    return json.data;
  } catch (error) {
    console.error('Fetch Error:', error);
    return null;
  }
}

export const LIST_QUERY = `
  query GetMediaList(
    $page: Int = 1, 
    $perPage: Int = 24, 
    $sort: [MediaSort], 
    $status: MediaStatus, 
    $season: MediaSeason, 
    $seasonYear: Int, 
    $search: String, 
    $genre: String, 
    $format: MediaFormat
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        currentPage
        hasNextPage
        lastPage
      }
      media(
        type: ANIME, 
        isAdult: false,
        sort: $sort, 
        status: $status, 
        season: $season, 
        seasonYear: $seasonYear, 
        search: $search, 
        genre: $genre, 
        format: $format
      ) {
        id
        title { romaji english }
        coverImage { large medium }
        genres
        format
        episodes
        duration
        status
        season
        seasonYear
        studios(isMain: true) {
          nodes { name }
        }
      }
    }
  }
`;

export const FILTERS_QUERY = `
  query GetFilters {
    genres: GenreCollection
    tags: MediaTagCollection {
      name
      category
    }
  }
`;

let cachedFiltersData: any = null;

export async function getCachedFilters() {
  if (cachedFiltersData) {
    return cachedFiltersData;
  }

  const data = await fetchFromAniList({ query: FILTERS_QUERY });
  
  cachedFiltersData = data;
  return cachedFiltersData;
}