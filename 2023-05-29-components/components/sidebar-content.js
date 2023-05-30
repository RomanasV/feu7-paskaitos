import eventsWrapper from './events-wrapper.js';
import podcastsWrapper from './podcasts-wrapper.js';

export default function sidebarContent() {
  const sidebarContentElement = document.createElement('div');
  sidebarContentElement.classList.add('sidebar-content');

  sidebarContentElement.append(
    podcastsWrapper('Podcastai'), 
    eventsWrapper('Renginiai')
  );

  return sidebarContentElement;
}