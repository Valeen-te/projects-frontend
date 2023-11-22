const btn = document.querySelector('.switch-btn');
const video =  document.querySelector('.contenedor-video')

btn.addEventListener('click', ()=>{
    if(!btn.classList.contains('slide')){
        btn.classList.add("slide")
        video.pause();
    }else{
        btn.classList.remove("slide")
        video.play()
    }
})

// precarga

const precarga = document.querySelector(".precarga")

window.addEventListener('load', ()=>{
    precarga.classList.add("hide-precarga")
})