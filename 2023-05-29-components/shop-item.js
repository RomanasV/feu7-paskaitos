function shopItem(data) {
  const { title, phone, email, address } = data;
  const shopElement = document.createElement('div');
  shopElement.classList.add('shop-item');

  const shopTitle = document.createElement('h2');
  shopTitle.classList.add('shop-title');
  shopTitle.textContent = title;

  const shopAddressList = document.createElement('ul');
  shopAddressList.classList.add('shop-address-list');

  shopAddressList.innerHTML = `<li>Phone: <a href="tel:${phone}">${phone}</a></li>
                               <li>Email: <a href="mailto:${email}">${email}</a></li>
                               <li>Address: <a href="#">${address}</a></li>`;

  shopElement.append(shopTitle, shopAddressList);
  return shopElement;
}

export default shopItem;