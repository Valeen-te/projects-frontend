// info de comentarios local

const comentarios = [
    {
        id: 1,
        nombre: "gillian s. maciejewski",
        trabajo: "desarrollador web",
        img: "img/img-2.png",
        texto:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt amet, officiis fuga deleniti pariatur placeat illum dicta quas aliquam."
    },
    {
        id: 2,
        nombre: "herbert j. bowen",
        trabajo: "backend",
        img: "img/img-3.png",
        texto:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt amet."
    },
    {
        id: 3,
        nombre: "wendell m. heer",
        trabajo: "frontend",
        img: "img/img-4.png",
        texto:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt amet, officiis fuga deleniti pariatur placeat illum dicta quas aliquam."
    },
    {
        id: 4,
        nombre: "barbara t. lyle",
        trabajo: "diseñador ux",
        img: "img/img-1.png",
        texto:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt amet, officiis fuga deleniti pariatur placeat illum dicta quas aliquam, architecto omnis debitis reiciendis veritatis magni. Illum repudiandae inventore nostrum excepturi."
    }
]

// seleccionando items

const img = document.getElementById('persona-img');
const autor = document.getElementById('autor');
const trabajo = document.getElementById('trabajo');
const info = document.getElementById('info');

const btn_antes = document.querySelector('.btn-antes');
const btn_despues = document.querySelector('.btn-despues');
const random = document.querySelector('.random-btn');

//elemento inicial
let elementoActual = 0;

// cargando elementos iniciales
window.addEventListener("DOMContentLoaded", ()=>{
    mostrarPersona();
})

// mostrar personas basada en el elemento

const mostrarPersona = () => {
    const elemento = comentarios[elementoActual];
    img.src = elemento.img;
    autor.textContent = elemento.nombre;
    trabajo.textContent = elemento.trabajo;
    info.textContent = elemento.texto;
}

// mostrar siguiente persona 

btn_despues.addEventListener("click", () =>{
    elementoActual++;
    if(elementoActual > comentarios.length - 1){
        elementoActual = 0;
    }
    mostrarPersona();
})

//mostrar persona anterior

btn_antes.addEventListener("click", () =>{
    elementoActual--;
    if(elementoActual < 0){
        elementoActual = comentarios.length - 1;
    }
    mostrarPersona();
})

//mostrar persona random

random.addEventListener("click", () =>{
    elementoActual = Math.floor(Math.random()*(comentarios.length))
    mostrarPersona();
})