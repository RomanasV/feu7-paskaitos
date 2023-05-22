async function init() {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums?_limit=15&_expand=user&_embed=photos');
  const albumsData = await res.json();

  const contentElement = document.querySelector('#content');
  const albumsListElement = createAlbumsList(albumsData);
  contentElement.append(albumsListElement);
}

init();

function createAlbumsList(albums) {
  const albumsList = document.createElement('div');
  albumsList.classList.add('albums-list');

  albums.forEach(album => {
    const title = album.title;
    const author = album.user.name;
    const photosCount = album.photos.length;
    const randomIndex = Math.floor(Math.random() * photosCount);
    const randomImage = album.photos[randomIndex];
    const randomImageUrl = randomImage.url;
    const randomImageTitle = randomImage.title;

    const albumItem = document.createElement('div');
    albumItem.classList.add('album-item');

    const albumLink = document.createElement('a');
    albumLink.href = './album.html';

    albumItem.append(albumLink);

    const albumTitle = document.createElement('h2');
    albumTitle.textContent = title;

    const albumAuthor = document.createElement('span');
    albumAuthor.textContent = `Author: ${author}`;

    const albumImage = document.createElement('img');
    albumImage.src = randomImageUrl;
    albumImage.alt = randomImageTitle;

    albumLink.append(albumTitle, albumAuthor, albumImage);
    
    albumsList.append(albumItem);
  })


  return albumsList;
}


// 3. Tokiu pačiu principu, kaip ir vartotojų bei įrašų puslapiams, sukurti puslapį albumams (albums.html). Prie kiekvieno albumo turi būti:
//   3.1. Parašytas jo pavadinimas.
//   3.2. Parašytas vartotojo, sukūrusio šį albumą, vardas.
//   3.3. Albume esančių nuotraukų skaičius.
//   3.4. Viena nuotrauka.
//   3.5. Šis elementas turi būti nuoroda.
