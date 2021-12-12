const inputEl = document.getElementById('validation-input');
console.log(inputEl);
const lengthInputEl = inputEl.dataset.length;
console.log(lengthInputEl);

function onFocusInput(event) {
}
function onBlurInput(event) {
   if(event.currentTarget.value.length == lengthInputEl){
      event.currentTarget.classList.remove('invalid');
      event.currentTarget.classList.add('valid');
   } else {
      event.currentTarget.classList.remove('valid');
      event.currentTarget.classList.add('invalid');
   }
}

inputEl.addEventListener('focus', onFocusInput);
inputEl.addEventListener('blur', onBlurInput);