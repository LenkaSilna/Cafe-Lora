import './style.css';

// komponenta pro layer
export const Layer = ({ color, label }) => {
  const layerElm = document.createElement('div');
  layerElm.setAttribute('class', 'layer');
  layerElm.innerHTML = `
    <div class="layer__color" style="background-color: ${color}"></div>
    <div class="layer__label">${label}</div>`;
  return layerElm;
};
