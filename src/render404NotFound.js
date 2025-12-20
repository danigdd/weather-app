import '../styles/general-styles.css';
import '../styles/notFound-styles.css';

const root = document.getElementById('content');

export function render404NotFound(name_not_found) {
  root.innerHTML = '';
  root.style.animation = 'none';
  void root.offsetWidth;
  root.style.animation = 'fadeUp 1s ease-out';
  console.log('we even creating it');

  // TITLE
  const titleDOM = document.createElement('div');
  titleDOM.id = 'titleDOM_id';
  titleDOM.textContent = `Oopss... Error 400`;
  root.appendChild(titleDOM);

  const noResultsDOM = document.createElement('div');
  noResultsDOM.id = 'noResults_id';
  noResultsDOM.textContent = `No results found for ${name_not_found}`;
  root.appendChild(noResultsDOM);

  // SEARCH BAR
  const searchBarWrapperDOM = document.createElement('div');
  searchBarWrapperDOM.id = 'searchBarWrapperNotFound_id';
  root.appendChild(searchBarWrapperDOM);

  const textAreaDOM = document.createElement('input');
  textAreaDOM.id = 'textArea_id';
  textAreaDOM.placeholder = 'Search for a city...';
  searchBarWrapperDOM.appendChild(textAreaDOM);

  const searchButtonDOM = document.createElement('button');
  searchButtonDOM.id = 'searchButton_id';
  searchBarWrapperDOM.appendChild(searchButtonDOM);
}
