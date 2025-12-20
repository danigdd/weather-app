import { API_KEY } from './config';
import { capitalizeFirstLetter } from '../utils/utils';

export async function getDataFromAPI(cityName) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=${API_KEY}`
    );
    const cityJSON_data = await response.json();
    const cityData = cleanDataFromAPI(cityJSON_data);
    return cityData;
  } catch (error) {
    console.log(`ERROR: ${error}`);
    return -1;
  }
}

function cleanDataFromAPI(JSON_data) {
  const cityData = {};
  cityData['city'] = capitalizeFirstLetter(JSON_data.resolvedAddress);
  cityData['current_temperature'] =
    Math.round(parseFahrToCelsius(JSON_data.currentConditions.temp) * 10) / 10;
  cityData['current_feelsLike'] =
    Math.round(parseFahrToCelsius(JSON_data.currentConditions.feelslike) * 10) /
    10;
  cityData['current_precibprob'] = JSON_data.currentConditions.precipprob;
  cityData['current_conditions'] = JSON_data.currentConditions.conditions;
  cityData['icon'] = JSON_data.currentConditions.icon;
  return cityData;
}

function parseFahrToCelsius(temperature) {
  return (temperature - 32) * (5 / 9);
}
