import { MAIN_MENU_ITEMS } from "./config.js";

export default function header() {
  const headerElement = document.createElement('header');

  const pageTitle = document.createElement('a');
  pageTitle.textContent = 'API Project';
  pageTitle.href = './';

  const searchForm = document.createElement('form');
  searchForm.action = './search.html';

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.name = 'search';
  searchInput.id = 'search';

  const searchButton = document.createElement('button');
  searchButton.type = 'submit';
  searchButton.textContent = 'Search';

  searchForm.append(searchInput, searchButton);

  const navigationElement = document.createElement('nav');
  navigationElement.classList.add('main-navigation');

  headerElement.append(pageTitle, navigationElement);

  const menuList = document.createElement('ul');
  menuList.classList.add('menu', 'main-menu');

  navigationElement.append(searchForm, menuList);

  MAIN_MENU_ITEMS.forEach(item => {
    let { title, path } = item;

    const menuItem = document.createElement('li');
    menuList.append(menuItem);
  
    const menuLink = document.createElement('a');

    if (location.pathname === '/' + path) {
      menuLink.classList.add('active');
    }

    menuItem.append(menuLink);
  
    menuLink.textContent = title;
    menuLink.href = './' + path;
  })

  return headerElement;
}