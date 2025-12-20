import '../styles/general-styles.css';

import { renderMain } from './renderMain';
import { renderCityWeather } from './renderCityWeather';
import { getDataFromAPI } from './apiController';

async function city(city_name) {
  const cityData = await getDataFromAPI(city_name);
  if (cityData == -1) return;
  renderCityWeather(cityData);
  const searchAgainDOM = document.getElementById('searchAgain_id');

  // RENDER MAIN
  searchAgainDOM.addEventListener('click', () => {
    main();
  });
}

function main() {
  renderMain();
  const searchDOM = document.getElementById('searchButton_id');
  const textAreaDOM = document.getElementById('textArea_id');

  searchDOM.addEventListener('click', () => {
    const city_name = document.getElementById('textArea_id').value;
    city(city_name);
  });

  textAreaDOM.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const city_name = document.getElementById('textArea_id').value;
      city(city_name);
    }
  });
}

main();
