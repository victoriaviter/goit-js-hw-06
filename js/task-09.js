function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnChangecolor = document.querySelector(".change-color");
const spanEl = document.querySelector('.color');


function onBtnChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = `${document.body.style.backgroundColor}`;
}

btnChangecolor.addEventListener('click"', onBtnChangeColor);