const boton = document.getElementById('boton');
const parrafo = document.getElementById('parrafo');

let colorRojo = false;

function cambiarColor() {
    if (colorRojo) {
        parrafo.style.backgroundColor = '';
    } else {
        parrafo.style.backgroundColor = 'red';
    }
    colorRojo = !colorRojo;
}

boton.addEventListener('click', cambiarColor);

