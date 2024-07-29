// Función de cliqueado en cada panel
const panels = document.querySelectorAll('.panel'); // Selecciona los elementos con está clase

// Event listener usando el método forEach para iterar sobre cada elemento
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses(); // Remueve la clase
        panel.classList.add('panel--active'); // Añade la clase
    });
});

// Función que elimina la clase del panel cliqueado
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('panel--active');
    });
};