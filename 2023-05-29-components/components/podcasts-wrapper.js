import { podcastsData } from "../data.js";
import podcastItem from "./podcast-item.js";

export default function podcastsWrapper(title) {
  const podcastsWrapperElement = document.createElement('div');
  podcastsWrapperElement.classList.add('podcasts-wrapper');

  if (title) {
    const sectionTitle = document.createElement('h2');
    sectionTitle.classList.add('section-title');
    sectionTitle.textContent = title;
    podcastsWrapperElement.append(sectionTitle);
  }

  const podcastsList = document.createElement('div');
  podcastsList.classList.add('podcast-wrapper');

  podcastsData.forEach(podcastData => {
    podcastsList.append(podcastItem(podcastData));
  })

  podcastsWrapperElement.append(podcastsList);

  return podcastsWrapperElement;
}