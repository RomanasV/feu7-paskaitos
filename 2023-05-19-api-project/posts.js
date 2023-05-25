import { POSTS_PER_PAGE } from './config.js';
import { fetchData, firstLetterUpperCase, getUrlParams } from './functions.js';
import header from './navigation.js';

async function init() {
  const id = getUrlParams('user_id');

  let fetchUrl;

  if (id) {
    fetchUrl = `https://jsonplaceholder.typicode.com/posts?_limit=${POSTS_PER_PAGE}&_expand=user&_embed=comments&userId=${id}`;
  } else {
    fetchUrl = `https://jsonplaceholder.typicode.com/posts?_limit=${POSTS_PER_PAGE}&_expand=user&_embed=comments`;
  }
  
  const postsData = await fetchData(fetchUrl);
  
  const contentElement = document.querySelector('#content');

  const postsListElement = createPostsList(postsData);
  contentElement.append(postsListElement);

  const headerElement = header();
  contentElement.before(headerElement);
}

function createPostsList(posts) {
  const postsList = document.createElement('ul');
  postsList.classList.add('posts-list');

  posts.forEach(post => {
    const postTitle = post.title;
    const postAuthorName = post.user.name;
    const postAuthorId = post.userId;
    const postCommentsNumber = post.comments.length;

    const postElement = document.createElement('li');
    const postLinkElement = document.createElement('a');

    postLinkElement.href = './post.html?post_id=' + post.id;
    postLinkElement.textContent = `${firstLetterUpperCase(postTitle)} (${postCommentsNumber})`;

    const userLinkElement = document.createElement('a');

    userLinkElement.href = './user.html?user_id=' + postAuthorId;
    userLinkElement.textContent = postAuthorName;

    postElement.append(postLinkElement, ' - ', userLinkElement);
    postsList.append(postElement);
  })

  return postsList;
}

init();