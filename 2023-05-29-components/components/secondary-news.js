import { secondaryNews as secondaryNewsData } from '../data.js';
import newsItem from './news-item.js';

export default function secondaryNews() {
  const secondaryNewsElement = document.createElement('div');
  secondaryNewsElement.classList.add('secondary-news');

  secondaryNewsData.forEach(newsData => secondaryNewsElement.append(newsItem(newsData)))

  return secondaryNewsElement;
}