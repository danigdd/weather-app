import '../styles/general-styles.css';
import '../styles/citypage-styles.css';

import { createTemperatureImg } from './setWeatherController';

const root = document.getElementById('content');

export function renderCityWeather(cityData) {
  root.innerHTML = '';
  root.style.animation = 'none';
  void root.offsetWidth;
  root.style.animation = 'fadeUp 1s ease-out';

  // TITLE
  const titleDOM = document.createElement('div');
  titleDOM.id = 'titleDOM_id';
  titleDOM.textContent = `${cityData['city']}`;
  root.appendChild(titleDOM);

  // TEMPERATURE WRAPPER
  const temperatureWrapperDOM = document.createElement('div');
  temperatureWrapperDOM.id = 'temperatureWrapper_id';
  root.appendChild(temperatureWrapperDOM);

  // IMAGE OF TEMPERATURE
  const temperatureImgDOM = createTemperatureImg(cityData['icon']);
  temperatureImgDOM.id = 'temperatureImg_id';
  temperatureWrapperDOM.appendChild(temperatureImgDOM);

  // CURRENT TEMPERATURE
  const temperatureLabelDOM = document.createElement('label');
  temperatureLabelDOM.id = 'temperatureLabel_id';
  temperatureLabelDOM.textContent = cityData['current_temperature'] + '°C';
  temperatureWrapperDOM.appendChild(temperatureLabelDOM);

  // CONDITIONS DESCRIPTION
  const conditionsDescDOM = document.createElement('div');
  conditionsDescDOM.id = 'conditionsDesc_id';
  conditionsDescDOM.textContent = `${cityData['current_conditions']}`;
  root.appendChild(conditionsDescDOM);

  // FEELS LIKE
  const feelsLikeDOM = document.createElement('div');
  feelsLikeDOM.id = 'feelsLike_id';
  feelsLikeDOM.textContent = 'Feels like ' + `${cityData['current_feelsLike']}`;
  root.appendChild(feelsLikeDOM);

  // SEARCH BAR
  const searchBarWrapperDOM = document.createElement('div');
  searchBarWrapperDOM.id = 'searchBarWrapper_id';
  root.appendChild(searchBarWrapperDOM);

  const textAreaDOM = document.createElement('input');
  textAreaDOM.id = 'textArea_id';
  textAreaDOM.placeholder = 'Search for a city...';
  searchBarWrapperDOM.appendChild(textAreaDOM);

  const searchButtonDOM = document.createElement('button');
  searchButtonDOM.id = 'searchButton_id';
  searchBarWrapperDOM.appendChild(searchButtonDOM);
}
