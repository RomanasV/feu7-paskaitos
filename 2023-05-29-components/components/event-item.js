export default function eventItem(data, isFirst) {
  const { day, imageUrl, location, month, title, url } = data;

  if (!title || !url) {
    return '';
  }

  let imageElement = '';

  if (imageUrl && isFirst) {
    imageElement = `<div class="image-wrapper">
                      <img class="event-image" src="${imageUrl}">
                    </div>`
  }

  let dateElement = '';
  
  if (day || month) {
    let dayElement = day ? `<span class="event-day">${day}</span>` : '';
    let monthElement = month ? `<span class="event-month">${month}</span>` : '';

    dateElement = `<div class="event-date">
                    ${dayElement}
                    ${monthElement}
                  </div>`;
  }
  
  const locationText = location ? `<span class="event location">${location}</span>` : '';


  const eventItemElement = document.createElement('div');
  eventItemElement.classList.add('event');

  eventItemElement.innerHTML = `<a href="${url}">
                                  ${imageElement}
                                  <div class="event-content">
                                    ${dateElement}
                                    <div class="event-info">
                                      ${locationText}
                                      <h3 class="event-title">${title}</h3>
                                    </div>
                                  </div>
                                </a>`;

  return eventItemElement;
}