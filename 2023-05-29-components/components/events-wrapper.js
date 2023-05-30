import { eventsData } from "../data.js";
import eventItem from "./event-item.js";
import largeButton from "./large-button.js";

export default function eventsWrapper(title) {
  const eventsWrapperElement = document.createElement('div');
  eventsWrapperElement.classList.add('events-wrapper');

  if (title) {
    const sectionTitle = document.createElement('h2');
    sectionTitle.classList.add('section-title');
    sectionTitle.textContent = title;
    eventsWrapperElement.append(sectionTitle);
  }

  const eventsList = document.createElement('div');
  eventsList.classList.add('events-list');

  eventsData.forEach((eventData, index) => {
    const isFirst = index === 0;
    eventsList.append(eventItem(eventData, isFirst));
  })

  eventsWrapperElement.append(eventsList, largeButton('#', 'Daugiau'))

  return eventsWrapperElement;
}