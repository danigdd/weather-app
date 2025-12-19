import sun from '../resources/sun.svg';
import cloud from '../resources/cloud.svg';
import rain from '../resources/rain.svg';
import snow from '../resources/snow.svg';

import fog from '../resources/fog.svg';
import partly_cloudy_night from '../resources/partly_cloudy_night.svg';
import partly_cloudy_day from '../resources/partly_cloudy_day.svg';
import moon from '../resources/moon-colored.svg';

export function createTemperatureImg(currentWeather) {
  const temperatureImgDOM = document.createElement('img');
  switch (currentWeather) {
    case 'clear-day':
      temperatureImgDOM.src = sun;
      break;
    case 'clear-night':
      temperatureImgDOM.src = moon;
      break;
    case 'partly-cloudy-day':
      temperatureImgDOM.src = partly_cloudy_day;
      break;
    case 'partly-cloudy-night':
      temperatureImgDOM.src = partly_cloudy_night;
      break;
    case 'cloudy':
      temperatureImgDOM.src = cloud;
      break;
    case 'rain':
      temperatureImgDOM.src = rain;
      break;
    case 'showers-day':
      temperatureImgDOM.src = rain;
      break;
    case 'showers-night':
      break;
    case 'thunder-rain':
      break;
    case 'thunder-showers-day':
      break;
    case 'thunder-showers-night':
      break;
    case 'snow':
      temperatureImgDOM.src = snow;
      break;
    case 'snow-showers-day':
      temperatureImgDOM.src = snow;
      break;
    case 'snow-showers-night':
      temperatureImgDOM.src = snow;
      break;
    case 'fog':
      temperatureImgDOM.src = fog;
      break;
    case 'wind':
      temperatureImgDOM.src = fog;
      break;
    default:
      break;
  }

  return temperatureImgDOM;
}
