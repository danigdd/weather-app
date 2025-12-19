import '../styles/general-styles.css';

import { renderMain } from './renderMain';
import { renderCityWeather } from './renderCityWeather';
import { getDataFromAPI } from './apiController';

async function main() {
  const cityData = await getDataFromAPI('sydney');
  console.log(cityData);
  renderCityWeather(cityData['city']);
}

main();
