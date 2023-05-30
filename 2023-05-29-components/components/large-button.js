export default function largeButton(href, text) {
  if (!href || !text) {
    return '';
  }

  const link = document.createElement('a');
  link.classList.add('button-large');
  link.href = href;
  link.textContent = text;

  return link;
}