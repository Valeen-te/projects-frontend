const btn_gen = document.getElementById('boton')

const color = document.querySelector('main')

const color_cod = document.getElementById('codigo')

var hexadecimal = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

const randonColor = () => {
    var colorFinal = "#";
    for (j = 0; j < 6; j++) {
        var numRandom = parseInt(Math.random()*16)
        colorFinal += hexadecimal[numRandom];
    }
    return colorFinal
}


btn_gen.addEventListener('click', ()=>{
    const nuevoColor = randonColor()
    color.style.background = nuevoColor
    color_cod.textContent = nuevoColor
})