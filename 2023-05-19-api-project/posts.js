async function init() {
  const queryParams = location.search;
  const urlParams = new URLSearchParams(queryParams);
  const id = urlParams.get('user_id');

  let fetchUrl;

  if (id) {
    fetchUrl = `https://jsonplaceholder.typicode.com/posts?_limit=15&_expand=user&_embed=comments&userId=${id}`;
  } else {
    fetchUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=50&_expand=user&_embed=comments';
  }
  
  const res = await fetch(fetchUrl);
  const postsData = await res.json();
  
  const contentElement = document.querySelector('#content');

  const postsListElement = createPostsList(postsData);
  contentElement.append(postsListElement);
}

init();

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
    postLinkElement.textContent = `${postTitle} (${postCommentsNumber})`;

    const userLinkElement = document.createElement('a');

    userLinkElement.href = './user.html?user_id=' + postAuthorId;
    userLinkElement.textContent = postAuthorName;

    postElement.append(postLinkElement, ' - ', userLinkElement);
    postsList.append(postElement);
  })


  return postsList;
}