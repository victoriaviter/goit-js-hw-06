let counterValue = 0;

const refs = {
    btnDecrement: document.querySelector('[data-action="decrement"]'),
 btnIncrement: document.querySelector('[data-action="increment"]'),
value: document.querySelector("#value"),
};


const onBtnClick = (num) => {
    counterValue += num;
    refs.value.textContent = counterValue;
};


refs.btnDecrement.addEventListener('click', () => onBtnClick (-1) );
refs.btnIncrement.addEventListener('click', () => onBtnClick (+1));
