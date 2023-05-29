import shopsWrapper from './shops-wrapper.js';
import mapWrapper from './map-wrapper.js';

function init() {
  const mainContentElement = document.querySelector('#main-content');

  const containerElement = document.createElement('div');
  containerElement.classList.add('container');

  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('content');

  contentWrapper.append(shopsWrapper(), mapWrapper());

  containerElement.append(contentWrapper);
  mainContentElement.append(containerElement);
}

init();