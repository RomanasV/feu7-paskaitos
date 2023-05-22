function init() {
  const navigationElement = document.createElement('nav');
  navigationElement.textContent = 'Labas';

  document.body.prepend(navigationElement);
}

init();