import '../styles/general-styles.css';

import { renderMain } from './renderMain';
import { renderCityWeather } from './renderCityWeather';
import { render404NotFound } from './render404NotFound';
import { getDataFromAPI } from './apiController';

async function city(city_name) {
  const cityData = await getDataFromAPI(city_name);
  if (cityData == -1) {
    console.log('what');
    pageNotFound(city_name);
    return;
  }
  renderCityWeather(cityData);
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

function pageNotFound(city_name_error) {
  console.log('entered on the function');
  render404NotFound(city_name_error);
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
