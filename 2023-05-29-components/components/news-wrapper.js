import largeButton from './large-button.js';
import mainNews from './main-news.js';
import secondaryNews from './secondary-news.js';

export default function newsWrapper(title) {
  const newsWrapperElement = document.createElement('div');
  newsWrapperElement.classList.add('news-wrapper');

  if (title) {
    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = title;
    sectionTitle.classList.add('section-title');
    
    newsWrapperElement.append(sectionTitle);
  }

  newsWrapperElement.append(
    mainNews(), 
    secondaryNews(), 
    largeButton('#', 'Visos naujienos')
  );
  
  return newsWrapperElement;
}