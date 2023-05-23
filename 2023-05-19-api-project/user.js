async function init() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/5?_embed=posts&_embed=albums');
  const userData = await res.json();

  console.log(userData);
  console.log(userData.posts);
  console.log(userData.albums);

  const contentElement = document.querySelector('#content');
  const userInfo = createUserInfoElement(userData);
  const userPosts = createUserPosts();
  const userAlbums = createUserAlbums();

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

function createUserPosts() {
  const postsWrapper = document.createElement('div');

  postsWrapper.innerHTML = '<p>Cia bus postai</p>';
  return postsWrapper;
}

function createUserAlbums() {
  const albumsWrapper = document.createElement('div');

  albumsWrapper.innerHTML = '<p>Cia bus albumai</p>';
  return albumsWrapper;
}