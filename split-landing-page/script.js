// Declaración de variables
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// Evento listener para mover el contenido a la derecha al pasar el mouse
left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

// Evento listener para mover el contenido a la izquierda al pasar el mouse
right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));

