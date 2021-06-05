const ulEL = document.querySelector('#categories');
console.log(`В списке ${ulEL.children.length} категории.`);

const liEl = document.querySelectorAll('.item');
liEl.forEach(el => {
    const category = el.querySelector('h2');
    const quantity = el.querySelector('ul');
    console.log(`Категория: ${category.textContent}`);
    console.log(`Количество элементов: ${quantity.children.length}`);
});