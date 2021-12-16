import {
  loadResourceFromStorage,
  loadResourceFromAPI,
  saveResourceInStorage,
} from '../storage/resource-storage.js';

export async function loadResource(localStorageKey, resourceURL) {
  try {
    return JSON.parse(loadResourceFromStorage(localStorageKey));
  } catch (error) {
    const resourceJSON = await loadResourceFromAPI(resourceURL);
    saveResourceInStorage(localStorageKey, JSON.stringify(resourceJSON));
    return resourceJSON;
  }
}
