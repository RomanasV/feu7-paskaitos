function init() {
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

  const menuItems = [
    {
      title: 'Home',
      path: ''
    },
    {
      title: 'Users',
      path: 'users.html'
    },
    {
      title: 'Posts',
      path: 'posts.html'
    },
    {
      title: 'Albums',
      path: 'albums.html'
    }
  ];

  menuItems.forEach(item => {
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

  document.body.prepend(headerElement);
}

init();
