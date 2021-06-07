const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const ulEL = document.querySelector('#gallery');

// const newArr = [];

// images.forEach(el => {
//   const li = document.createElement('li');
//   const img = document.createElement('img');
//   img.src = el.url;
//   img.alt = el.alt;
//   img.width = 320;
//   li.appendChild(img);

//   newArr.push(li);
// });

// ulEL.append(...newArr);

// console.log('ulEL', ulEL)


const ulEl = document.querySelector('#gallery');

const makeGallery = ({ url, alt }) => {
  return `<li><img src="${url}" alt="${alt}" width=320></li>`
};

const list = images.map(makeGallery).join('');

ulEl.insertAdjacentHTML('beforeend', list);
console.log(ulEl);

