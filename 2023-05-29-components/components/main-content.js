import newsWrapper from './news-wrapper.js';
import videoWrapper from './video-wrapper.js';

export default function mainContent() {
  const mainContentElement = document.createElement('main');
  mainContentElement.classList.add('main-content');

  mainContentElement.append(newsWrapper('Naujienos'), videoWrapper('Vaizdo įrašai', 'https://www.youtube.com/embed/b8dGCsP75HA', 'Jei galiu aš – gali ir tu!'));

  return mainContentElement;
}