// Seleccionar contenido 

// querySelector
const heading = document.querySelector('.header__texto h2'); // Selecciona el primer elemento que coincida con el selector
heading.textContent = 'Nuevo Heading';
console.log(heading);


// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a'); // Selecciona todos los elementos que coincidan con el selector
console.log(enlaces[0]);

enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('navegacion__enlace');

// getElementById
const heading2 = document.getElementById('heading');
console.log(heading2);
