import '../styles/general-styles.css';

import { renderMain } from './view';
import { getDataFromAPI } from './apiController';

renderMain();

async function createDataObject() {
  const cityData = await getDataFromAPI('buenos aires');
  console.log(cityData);
}

createDataObject();
