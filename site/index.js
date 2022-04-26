let barraLateral = document.getElementById('barra-lateral')

function contadorLinhas() {
    for (let i = 1; i <= 22; i++) {
        barraLateral.innerHTML += `<p>${i}</p>`
    }
}