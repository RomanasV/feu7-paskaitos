import { getUrlParams } from "./functions.js";

async function init() {
  const id = getUrlParams('user_id');

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}?_embed=posts&_embed=albums`);
  const userData = await res.json();

  const contentElement = document.querySelector('#content');
  const userInfo = createUserInfoElement(userData);
  // const userPosts = createUserPosts(userData.posts, userData.name);
  // const userAlbums = createUserAlbums(userData.albums, userData.name);
  
  const userPosts = createDataList(userData.posts, userData.name, 'posts', 'post.html');
  const userAlbums = createDataList(userData.albums, userData.name, 'albums', 'album.html');

  contentElement.append(userInfo, userPosts, userAlbums);
}

init();

function createUserInfoElement(user) {
  const { name, username, email, phone, website } = user;
  const { city, street, suite, zipcode } = user.address;
  const { lat, lng } = user.address.geo;
  const companyName = user.company.name;

  const addressText = `${street} ${suite}, ${city} (zipcode: ${zipcode})`;
  const addressMapLink = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  const userInfoWrapper = document.createElement('div');
  userInfoWrapper.classList.add('user-info-wrapper');

  userInfoWrapper.innerHTML = `<h1>${name} (${username})</h1>
                               <ul>
                                <li>Email: <a href="mailto:${email}">${email}</a></li>
                                <li>Phone: <a href="tel:${phone}">${phone}</a></li>
                                <li>Website: <a href="https://${website}" target="_blank">${website}</a></li>
                                <li>Company: ${companyName}</li>
                                <li>Address: <a href="${addressMapLink}" target="_blank">${addressText}</a></li>
                               </ul>`;

  return userInfoWrapper;
}

function createUserPosts(posts, name) {
  const postsWrapper = document.createElement('div');
  postsWrapper.classList.add('posts-wrapper');

  const postsWrapperTitle = document.createElement('h2');
  postsWrapper.append(postsWrapperTitle);
  postsWrapperTitle.textContent = 'No posts :(';
  
  if (posts.length > 0) {
    postsWrapperTitle.textContent = `Posts of ${name}:`;
    const postsList = document.createElement('ul');
  
    posts.forEach(post => {
      const { title } = post;
      const postItem = document.createElement('li');
      const postLink = document.createElement('a');
      postLink.href = './post.html?post_id=' + post.id;
      postLink.textContent = title;
  
      postItem.append(postLink);
      postsList.append(postItem);
    })
  
    postsWrapper.append(postsList);
  }
  
  return postsWrapper;
}

function createUserAlbums(albums, name) {
  const albumsWrapper = document.createElement('div');
  albumsWrapper.classList.add('albums-wrapper');

  const albumsWrapperTitle = document.createElement('h2');
  albumsWrapper.append(albumsWrapperTitle);
  albumsWrapperTitle.textContent = 'No albums :(';
  
  if (albums.length > 0) {
    albumsWrapperTitle.textContent = `Albums of ${name}:`;
    const albumsList = document.createElement('ul');
  
    albums.forEach(album => {
      const { title } = album;
      const albumItem = document.createElement('li');
      const albumLink = document.createElement('a');
      albumLink.href = './album.html?album_id=' + album.id;
      albumLink.textContent = title;
  
      albumItem.append(albumLink);
      albumsList.append(albumItem);
    })
  
    albumsWrapper.append(albumsList);
  }
  
  return albumsWrapper;
}

function createDataList(data, name, dataTitle, url) {
  const wrapper = document.createElement('div');
  wrapper.classList.add(dataTitle + '-wrapper');

  const wrapperTitle = document.createElement('h2');
  wrapper.append(wrapperTitle);
  wrapperTitle.textContent = `No ${dataTitle} :(`;
  
  if (data.length > 0) {
    wrapperTitle.textContent = `${dataTitle} of ${name}:`;
    const list = document.createElement('ul');
  
    data.forEach(item => {
      const { title } = item;
      const listItem = document.createElement('li');
      const itemLink = document.createElement('a');
      itemLink.href = './' + url;
      itemLink.textContent = title;
  
      listItem.append(itemLink);
      list.append(listItem);
    })
  
    wrapper.append(list);
  }
  
  return wrapper;
}