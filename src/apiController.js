import { API_KEY } from './config';

export async function getDataFromAPI(cityName) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=${API_KEY}`
  );
  const cityData = await response.json();
  return cityData;
}
