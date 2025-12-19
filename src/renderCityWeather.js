import '../styles/general-styles.css';
import '../styles/citypage-styles.css';
const root = document.getElementById('content');

export function renderCityWeather(cityName) {
  root.innerHTML = '';

  // TITLE
  const titleDOM = document.createElement('div');
  titleDOM.id = 'titleDOM_id';
  titleDOM.textContent = `${cityName}`;
  root.appendChild(titleDOM);

  return;
}
