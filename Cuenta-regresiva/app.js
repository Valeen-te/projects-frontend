const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

const dias = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',
];

const fechaLimite = document.querySelector('.fecha-limite');
const sorteo = document.querySelector('.sorteo');
const elementos = document.querySelectorAll('.fecha-limite-formato h4');

let fechaActual = new Date();
let añoActual = fechaActual.getFullYear();
let mesActual = fechaActual.getMonth();
let diaActual = fechaActual.getDate();

const fechaFinal = new Date(añoActual, mesActual, diaActual + 10, 11, 30, 0);


const año = fechaFinal.getFullYear();
const horas = fechaFinal.getHours();
const minutos = fechaFinal.getMinutes();

const mes = meses[fechaFinal.getMonth()];
const fecha = fechaFinal.getDate();

const diaSemana = dias[fechaFinal.getDay()];

sorteo.textContent = `El sorteo termina el ${diaSemana} ${fecha} de ${mes} de ${año} a las ${horas}:${minutos}am`;

const duracion = fechaFinal.getTime();

const tiempoAproximado = fechaFinal.getTime();

const tiempoRestante = ()=>{
    const hoy = new Date().getTime();
    const t = fechaFinal - hoy;

    const unDia = 24*60*60*1000;
    const unaHora = 60*60*1000;
    const unMinuto = 60*1000;
    const unSegundo = 1000;

    let dias = Math.floor(t / unDia);
    let horas = Math.floor((t % unDia) / unaHora);
    let minutos = Math.floor((t % unaHora) /unMinuto);
    let segundos = Math.floor((t % unMinuto) /unSegundo);

    const valores = [dias,horas,minutos,segundos];

    const formato = (elemento)=>{
        if(elemento<10){
            return elemento = `0${elemento}`
        }
        return elemento
    }

    elementos.forEach((elementos,indice)=>{
        elementos.innerHTML = formato(valores[indice]);
    });

    if(t<0){
        clearInterval(contador);
        fechaLimite.innerHTML = `<h4 class="expirado">Tiempo expirado, Sorteo terminado</h4>`
    }
}

let contador = setInterval(tiempoRestante, 1000);

tiempoRestante()