const inputEL = document.querySelector('#validation-input');
const attributeValue = inputEL.getAttribute('data-length');
const maxInputlenght = parseInt(attributeValue, 10);

inputEL.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if (inputEL.value.length === maxInputlenght) {
        inputEL.classList.add("valid");
        inputEL.classList.remove("invalid");
    } else inputEL.classList.add("invalid");
    
    if (inputEL.value.length === 0) {
        inputEL.classList.remove("valid");
        inputEL.classList.remove("invalid");
    }
};