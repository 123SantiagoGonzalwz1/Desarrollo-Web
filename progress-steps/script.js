// Definimos variables
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

// Evento de escucha para seguir adelante
next.addEventListener('click', () => {
    
    currentActive++;

    if(currentActive > circles.length) {
        currentActive = circles.length
    };

    update();
});


// Evento de escucha para ir hacia atrás
prev.addEventListener('click', () => {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    };

    update();
});

// Función de actualización de los estilos
function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('circle--active');
        } else {
            circle.classList.remove('circle--active');
        };
    });

    // Activación y desactivación de los botones
    const actives = document.querySelectorAll('.circle--active');

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
    
    if(currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    };
};