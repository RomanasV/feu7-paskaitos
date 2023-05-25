import { API_URL, PHOTOS_PER_ALBUM } from "./config.js";
import { fetchData, firstLetterUpperCase, getUrlParams } from "./functions.js";
import header from "./navigation.js";

async function init() {
  const contentElement = document.querySelector('#content');
  const headerElement = header();

  contentElement.before(headerElement);

  const albumId = getUrlParams('album_id');
  const albumsData = await fetchData(`${API_URL}/albums/${albumId}?_expand=user&_embed=photos`);

  const albumElement = createAlbumElement(albumsData);

  contentElement.append(albumElement);
}

function createAlbumElement(album) {
  const albumWrapper = document.createElement('div');
  albumWrapper.classList.add('album-wrapper');

  const albumInfo = document.createElement('div');
  albumInfo.classList.add('album-info');

  const albumTitle = document.createElement('h1');
  albumTitle.textContent = firstLetterUpperCase(album.title);

  const albumAuthor = document.createElement('span');
  albumAuthor.innerHTML = `Author: <a href="./user.html?user_id=${album.user.id}">${album.user.name}</a>`

  albumInfo.append(albumTitle, albumAuthor);

  const photosList = document.createElement('div');
  photosList.classList.add('photos-list');

  const slicedAlbums = album.photos.slice(0, PHOTOS_PER_ALBUM);

  slicedAlbums.forEach(photo => {
    const photoElement = document.createElement('img');
    photoElement.src = photo.thumbnailUrl;
    photoElement.alt = photo.title;

    photosList.append(photoElement);
  })

  albumWrapper.append(albumInfo, photosList);
  return albumWrapper;
}

init();