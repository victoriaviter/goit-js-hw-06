const refs = {
  fontSizeEl: document.querySelector("#font-size-control"),
  spanText: document.querySelector("#text"),
};

const changeSize = () => {
    refs.spanText.style.fontSize = `${ refs.fontSizeEl.value } px`;
};
refs.fontSizeEl.addEventListener("input", changeSize);