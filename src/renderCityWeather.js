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
  const temperatureWrapper = document.createElement('div');
  temperatureWrapper.id = 'temperatureWrapper_id';
  root.appendChild(temperatureWrapper);

  // IMAGE OF TEMPERATURE
  const temperatureImg = document.createElement('img');
  temperatureImg.id = 'temperatureImg_id';
  temperatureImg.src = sun;
  temperatureWrapper.appendChild(temperatureImg);

  // CURRENT TEMPERATURE
  const temperatureLabel = document.createElement('label');
  temperatureLabel.id = 'temperatureLabel_id';
  temperatureLabel.textContent = cityData['current_temperature'] + '°C';
  temperatureWrapper.appendChild(temperatureLabel);

  return;
}
