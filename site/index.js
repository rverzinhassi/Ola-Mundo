const btnHamburguer = document.getElementById('btn-hamburguer');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav')
    nav.classList.toggle('active');
}

btnHamburguer.addEventListener('click', toggleMenu);
btnHamburguer.addEventListener('touchstart', toggleMenu);