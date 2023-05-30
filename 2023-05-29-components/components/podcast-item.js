export default function podcastItem(data) {
  const { imageUrl, length, title, date } = data;

  if (!title) {
    return '';
  }

  const podcastItemElement = document.createElement('div');
  podcastItemElement.classList.add('podcast');

  const dateElement = date ? `<span class="podcast-date">${date}</span>` : '';
  
  podcastItemElement.innerHTML = `<div class="podcast">
                                    <div class="podcast-controls">
                                      <img class="podcast-image" src="./${imageUrl}">
                                      <span class="podcast-length">Trukmė: ${length}</span>
                                      <button class="podcast-play">Play</button>
                                    </div>
                                    <div class="podcast-content">
                                      <h3 class="podcast-title">${title}</h3>
                                      ${dateElement}
                                    </div>
                                  </div>`

  return podcastItemElement;
}