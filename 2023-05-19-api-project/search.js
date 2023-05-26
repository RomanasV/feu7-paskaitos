import header from "./navigation.js";
import { fetchData, getUrlParams } from "./functions.js";
import { API_URL } from "./config.js";

async function init() {
  const contentElement = document.querySelector('#content');
  const headerElement = header();
  contentElement.append(headerElement);

  const searchPhrase = getUrlParams('search');
  console.log(searchPhrase);

  const posts = await fetchData(`${API_URL}/posts?q=${searchPhrase}`);
  console.log(posts);
}

init();