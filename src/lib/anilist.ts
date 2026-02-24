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
  query (
    $page: Int, 
    $perPage: Int, 
    $sort: [MediaSort], 
    $search: String, 
    $genre: String, 
    $season: MediaSeason, 
    $seasonYear: Int, 
    $format: MediaFormat, 
    $status: MediaStatus, 
    $source: MediaSource, 
    $countryOfOrigin: CountryCode, 
    $episodes_greater: Int, 
    $episodes_lesser: Int, 
    $duration_greater: Int, 
    $duration_lesser: Int, 
    $startDate_greater: FuzzyDateInt, 
    $startDate_lesser: FuzzyDateInt, 
    $tag_in: [String]
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo { total currentPage lastPage hasNextPage }
      media(
        type: ANIME, 
        sort: $sort, 
        search: $search, 
        genre: $genre, 
        season: $season, 
        seasonYear: $seasonYear, 
        format: $format, 
        status: $status,        
        source: $source,        
        countryOfOrigin: $countryOfOrigin, 
        episodes_greater: $episodes_greater, 
        episodes_lesser: $episodes_lesser, 
        duration_greater: $duration_greater, 
        duration_lesser: $duration_lesser, 
        startDate_greater: $startDate_greater, 
        startDate_lesser: $startDate_lesser, 
        tag_in: $tag_in, 
        isAdult: false
      ) {
        id 
        title { romaji english } 
        coverImage { large } 
        format 
        status 
        episodes 
        duration 
        averageScore 
        genres 
        season 
        seasonYear
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