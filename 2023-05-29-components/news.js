import mainContent from './components/main-content.js';
import sidebarContent from './components/sidebar-content.js';

function init() {
  const pageContent = document.querySelector('#page-content');

  const container = document.createElement('div');
  container.classList.add('container');

  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('content-wrapper');

  contentWrapper.append(mainContent(), sidebarContent());
  container.append(contentWrapper);
  pageContent.append(container);
}

init();