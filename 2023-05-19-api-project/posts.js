async function init() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=15&_expand=user&_embed=comments');
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
    const postCommentsNumber = post.comments.length;

    const postElement = document.createElement('li');
    const postLinkElement = document.createElement('a');

    postLinkElement.href = './post.html';
    postLinkElement.textContent = `${postTitle} (${postCommentsNumber})`;

    const userLinkElement = document.createElement('a');

    userLinkElement.href = './user.html';
    userLinkElement.textContent = postAuthorName;

    postElement.append(postLinkElement, ' - ', userLinkElement);
    postsList.append(postElement);
  })


  return postsList;
}