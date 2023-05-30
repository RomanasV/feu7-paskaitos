import newsItem from './news-item.js';
import { mainNews as mainNewsData } from '../data.js';

function mainNews() {
  const mainNewsElement = document.createElement('div');
  mainNewsElement.classList.add('main-news');

  mainNewsData.forEach(newsData => {
    const newsElement = newsItem(newsData);
    mainNewsElement.append(newsElement);
  })

  return mainNewsElement;
}

export default mainNews;