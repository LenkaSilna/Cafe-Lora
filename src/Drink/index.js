import './style.css';
import { Layer } from '../Layer';

// komponenta pro layer
export const Drink = (props) => {
  const productElm = document.createElement('div');
  productElm.classList.add('drink');
  productElm.innerHTML = `
  <div class="drink__product">
    <div class="drink__cup">
      <img src="/assets/cups/${props.id}.png" />
    </div>
    <div class="drink__info">
      <h3>${props.name}</h3>
    </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn">Objednat</button>
  </div>`;

  // zachytit element, pro vložení komponenty Layer
  const productInfo = productElm.querySelector('.drink__info');

  for (let i = 0; i < props.layers.length; i++) {
    productInfo.appendChild(Layer(props.layers[i]));
  }

  // zachytit elementy pro objednávku
  const orderButton = productElm.querySelector('.order-btn');
  const drinkCup = productElm.querySelector('.drink__cup');

  // na klik vybrat kávu nebo zrušit objednávku
  orderButton.addEventListener('click', () => {
    if (props.ordered) {
      orderButton.innerHTML = 'Objednat';
      props.ordered = false;
    } else {
      orderButton.innerHTML = 'Zrušit';
      props.ordered = true;
    }
    drinkCup.classList.toggle('drink__cup--selected');
  });

  return productElm;
};
