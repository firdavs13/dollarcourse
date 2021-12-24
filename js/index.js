
let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form__input");
let elFormSelect = document.querySelector(".form-select");
let elFormBtn = document.querySelector(".form__btn");
let elFormResult = document.querySelector(".form__result");

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

  let inputValue = elFormInput.value;
  let selectValue = elFormSelect.value;


  elFormResult.textContent = `${inputValue * selectValue}`;
})