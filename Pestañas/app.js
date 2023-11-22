const btn = document.querySelectorAll('.tab-btn');
const articulos = document.querySelector('.nosotros');
const contenido =  document.querySelectorAll('.contenido');


articulos.addEventListener('click', (e)=>{
    const id = e.target.dataset.id;
    if(id){
        btn.forEach((btn)=>{
            btn.classList.remove('activo');
            e.target.classList.add('activo');
        });
        contenido.forEach((articulo)=>{
            articulo.classList.remove('activo');
        });
        const elemento = document.getElementById(id);
        elemento.classList.add('activo')
    }
});

btn.forEach((btn)=>{
    btn.addEventListener('click',()=>{

    });
});