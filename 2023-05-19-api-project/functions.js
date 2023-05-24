export function firstLetterUpperCase(str) {
  const firstLetter = str.at(0).toUpperCase();
  const restOfStr = str.slice(1);
  const output = firstLetter + restOfStr;

  return output;
}

export async function fetchData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export function createHTMLElement(type, className, text) {
  const element = document.createElement(type);

  if (className) {
    element.classList.add(className);
  }

  if (text) {
    element.textContent = text;
  }

  return element;
}