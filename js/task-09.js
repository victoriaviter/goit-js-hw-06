function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorButton = document.querySelector('.change-color');
const showColorSpan = document.querySelector('.color');

const changeColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
};

const showColor = () => {
  showColorSpan.textContent = getRandomHexColor();
};

changeColorButton.addEventListener('click', changeColor);
changeColorButton.addEventListener('click', showColor);