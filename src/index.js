import '../styles/general-styles.css';

import { renderMain } from './view';
import { getDataFromAPI } from './apiController';

console.log('hi');
renderMain();
getDataFromAPI('washington');
console.log('bye');
