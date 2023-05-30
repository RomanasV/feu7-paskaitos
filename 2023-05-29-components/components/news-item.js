function newsItem(data) {
  let { link, imageUrl, title, category, date } = data;
  
  if (!title || !imageUrl || !link) {
    return '';
  }

  const categoryElement = category ? `<span class="news-category">${category}</span>` : '';
  const dateElement = date ? `<span class="news-date">${date}</span>` : '';

  const newsItemElement = document.createElement('div');
  newsItemElement.classList.add('news-item');

  newsItemElement.innerHTML = `<a href="${link}">
                                <div class="image-wrapper">
                                  <img src="${imageUrl}">
                                </div>
                                <div class="news-content">
                                  ${categoryElement}
                                  <h3 class="news-title">${title}</h3>
                                  ${dateElement}
                                </div>
                              </a>`;

  return newsItemElement;
}

export default newsItem;