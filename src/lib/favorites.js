const STORAGE_KEY = 'app:favorites';

export const BUCKETS = [
  'anime', 'aeni', 'donghua', 
  'manga', 'manhwa', 'manhua', 'novel', 
  'character', 'seiyuu'
];

const DEFAULT_STATE = BUCKETS.reduce((acc, bucket) => {
  acc[bucket] = [];
  return acc;
}, {});

const validateData = (data) => {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return DEFAULT_STATE;
  
  const validated = {};
  BUCKETS.forEach(bucket => {
    validated[bucket] = Array.isArray(data[bucket]) ? data[bucket] : [];
  });
  return validated;
};

export const getFavorites = () => {
  if (typeof window === 'undefined') return DEFAULT_STATE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    return validateData(JSON.parse(raw));
  } catch (error) {
    console.error("Favorites parsing error. Resetting to default.", error);
    return DEFAULT_STATE; 
  }
};

const saveFavorites = (data) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent('favoritesUpdated', { detail: data }));
  } catch (error) {
    console.error("Failed to save favorites.", error);
  }
};

export const isFavorite = (id, type) => {
  const data = getFavorites();
  if (!data[type]) return false;
  return data[type].some(item => String(item.id) === String(id));
};

export const toggleFavorite = (itemData) => {
  const { id, type, title, image, slug } = itemData;
  const data = getFavorites();
  
  if (!data[type]) data[type] = [];
  
  const existsIndex = data[type].findIndex(item => String(item.id) === String(id));
  let isAdded = false;

  if (existsIndex > -1) {
    data[type].splice(existsIndex, 1); 
  } else {
    data[type].unshift({ 
      id: String(id),
      type,
      title,
      image,
      slug,
      savedAt: Date.now()
    });
    isAdded = true;
  }

  saveFavorites(data);
  return isAdded;
};

export const removeFavorite = (id, type) => {
  const data = getFavorites();
  if (!data[type]) return;
  data[type] = data[type].filter(item => String(item.id) !== String(id));
  saveFavorites(data);
};

export const clearAllFavorites = () => {
  saveFavorites(DEFAULT_STATE);
};

if (typeof window !== 'undefined') {
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      window.dispatchEvent(new CustomEvent('favoritesUpdated', { detail: getFavorites() }));
    }
  });
}