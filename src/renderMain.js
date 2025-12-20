import '../styles/general-styles.css';
import '../styles/mainPage-styles.css';
const root = document.getElementById('content');
export function renderMain() {
  root.innerHTML = '';
  root.style.animation = 'none';
  void root.offsetWidth;
  root.style.animation = 'fadeUp 0.7s ease-out';

  // TITLE
  const titleDOM = document.createElement('div');
  titleDOM.id = 'titleDOM_id';
  titleDOM.textContent = 'Your weather in a click.';
  root.appendChild(titleDOM);

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

  return;
}
