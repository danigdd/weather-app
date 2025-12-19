import '../styles/general-styles.css';
const root = document.getElementById('content');
export function render() {
  root.innerHTML = '';

  const paragraph = document.createElement('div');
  paragraph.textContent = 'HI how a re u';

  root.appendChild(paragraph);
  return;
}
