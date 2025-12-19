import '../styles/general-styles.css';
import '../styles/citypage-styles.css';
import sun from '../resources/sun.svg';
const root = document.getElementById('content');

export function renderCityWeather(cityData) {
  root.innerHTML = '';

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
  const temperatureImgDOM = document.createElement('img');
  temperatureImgDOM.id = 'temperatureImg_id';
  temperatureImgDOM.src = sun;
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
}
