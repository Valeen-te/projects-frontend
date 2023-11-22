const desplegar = document.querySelector('.boton-nav');
const Salir = document.querySelector('.salir');
const sider = document.querySelector('.sider');

const siderDesplegar = ()=>{
    sider.classList.toggle("sider-desplegar");
}

desplegar.addEventListener("click", ()=>{
    siderDesplegar();
})

Salir.addEventListener("click", ()=>{
    siderDesplegar();
})