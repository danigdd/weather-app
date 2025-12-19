import { API_KEY } from './config';

export async function getDataFromAPI(cityName) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=${API_KEY}`
  );
  const cityJSON_data = await response.json();
  const cityData = cleanDataFromAPI(cityJSON_data);
  return cityData;
}

function cleanDataFromAPI(JSON_data) {
  const cityData = {};
  cityData['current_temperature'] = JSON_data.currentConditions.temp;
  return cityData;
}
