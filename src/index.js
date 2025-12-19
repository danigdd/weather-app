import '../styles/general-styles.css';

import { renderMain } from './renderMain';
import { renderCityWeather } from './renderCityWeather';
import { getDataFromAPI } from './apiController';

async function main() {
  const cityData = await getDataFromAPI('lleifda');
  console.log(cityData);
  renderCityWeather(cityData);
  const searchAgainDOM = document.getElementById('searchAgain_id');

  // RENDER MAIN
  searchAgainDOM.addEventListener('click', () => {
    console.log('hi');
  });
}

main();
