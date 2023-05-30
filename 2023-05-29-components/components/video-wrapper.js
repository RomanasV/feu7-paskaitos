import largeButton from './large-button.js';

export default function videoWrapper(title, youtubeUrl, helperText) {
  const videoWrapperElement = document.createElement('div');
  videoWrapperElement.classList.add('video-section-wrapper');

  videoWrapperElement.innerHTML = `<h2 class="section-title">${title}</h2>
                                  <div class="video-wrapper">
                                    <iframe width="560" height="315" src="${youtubeUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                  </div>
                                  <span class="video-extra-text">${helperText}</span>`;
  
  videoWrapperElement.append(largeButton('#', 'Visi vaizdo įrašai'));

  return videoWrapperElement;
}