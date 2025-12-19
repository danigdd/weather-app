import '../styles/general-styles.css';
import '../styles/mainPage-styles.css';
const root = document.getElementById('content');
export function renderMain() {
  root.innerHTML = '';

  // TITLE
  const titleDOM = document.createElement('div');
  titleDOM.id = 'titleDOM_id';
  titleDOM.textContent = 'Your weather in a click.';
  root.appendChild(titleDOM);

  return;
}
