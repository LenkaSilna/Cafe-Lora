import './style.css';
import { Drink } from './Drink';

console.log('funguju!');

//=== MENU ===//

// zachytit elementy
const navbar = document.querySelector('#nav-btn');
const navbarItems = document.querySelectorAll('.nav-item');
const nav = document.querySelector('nav');

// otevřít/zavřít menu přes button
navbar.addEventListener('click', () => {
  nav.classList.toggle('nav-closed');
});

// skrýt menu přes kliknutí na položku v menu
for (let i = 0; i < navbarItems.length; i++) {
  const navigation = navbarItems[i];
  navigation.addEventListener('click', () => {
    nav.classList.toggle('nav-closed');
  });
}

//=== COFEE PRODUCTS ===//

// zachytit element, kam vložím komponentu Drink

const getDrinks = (drinks) => {
  const product = document.querySelector('.drinks-list');
  drinks.forEach((drink) => {
    product.appendChild(Drink(drink));
  });
};

fetch('https://apps.kodim.cz/daweb/cafelora/api/drinks')
  .then((response) => response.json())
  .then(getDrinks);
