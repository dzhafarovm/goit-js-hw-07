const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulEL = document.querySelector('#ingredients');
const newArr = [];

ingredients.forEach(el => {
  const li = document.createElement('li');
  li.textContent = el;
  newArr.push(li);
});

ulEL.append(...newArr);

console.log(ulEL);