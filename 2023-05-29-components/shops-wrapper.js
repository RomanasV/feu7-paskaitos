import { SHOPS_DATA } from "./config.js";
import shopItem from "./shop-item.js";

export default function shopsWrapper() {
  const shopsWrapper = document.createElement('div');
  shopsWrapper.classList.add('shops-wrapper');

  const shopsWrapperTitle = document.createElement('h1');
  shopsWrapperTitle.classList.add('shops-section-title');
  shopsWrapperTitle.textContent = 'Find Us';

  const shopsList = document.createElement('div');
  shopsList.classList.add('shops-list');

  SHOPS_DATA.forEach(shopData => {
    // const shopItemElement = shopItem(shopData.title, shopData.phone, shopData.email, shopData.address);
    const shopItemElement = shopItem(shopData);
    shopsList.append(shopItemElement);
  })


  shopsWrapper.append(shopsWrapperTitle, shopsList);
  return shopsWrapper;
}