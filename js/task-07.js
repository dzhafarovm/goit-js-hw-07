const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');


inputEl.addEventListener('input', handleInput);

function handleInput() {
    spanEl.style.fontSize = `${inputEl.value}px`;
}