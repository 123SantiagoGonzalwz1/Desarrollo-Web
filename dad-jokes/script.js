// Declaración de variables 
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// Evento
jokeBtn.addEventListener('click', generateJoke);

generateJoke();

// Usando async y await
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };

    const res = await fetch('https://icanhazdadjoke.com', config);

    const data = await res.json();

    jokeEl.innerHTML = data.joke;
};