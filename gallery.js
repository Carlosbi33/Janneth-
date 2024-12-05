
const poems = [
    { date: '2024-12-05', text: 'Eres mi sol, mi luna, mi estrella...' },
    { date: '2024-12-06', text: 'Cada día contigo es un regalo...' },
    { date: '2024-12-07', text: 'Tu sonrisa ilumina mi mundo...' },
];

const today = new Date().toISOString().split('T')[0];
const poemContainer = document.getElementById('poem-container');

poems.forEach(poem => {
    const poemElement = document.createElement('div');
    poemElement.className = 'poem';

    if (poem.date === today) {
        poemElement.innerText = poem.text;
    } else if (poem.date < today) {
        poemElement.innerText = 'Poema anterior: ' + poem.text;
    } else {
        poemElement.innerText = 'Poema bloqueado hasta: ' + poem.date;
    }

    poemContainer.appendChild(poemElement);
});
