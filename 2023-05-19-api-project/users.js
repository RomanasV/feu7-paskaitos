async function init() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users?_embed=posts');
  const usersData = await res.json();

  const contentElement = document.querySelector('#content');
  const usersListElement = createUsersList(usersData);
  contentElement.append(usersListElement);
}

function createUsersList(users) {
  const usersList = document.createElement('ul');
  usersList.classList.add('users-list');

  users.forEach(user => {
    const itemElement = document.createElement('li');
    itemElement.classList.add('user-item');

    const linkElement = document.createElement('a');
    linkElement.textContent = `${user.name} (${user.posts.length})`;
    linkElement.href = './user.html';

    itemElement.append(linkElement);

    usersList.append(itemElement);
  })

  return usersList;
}

init();