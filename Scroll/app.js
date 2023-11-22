// ********** Establecer fecha **********

const fecha =  document.getElementById('fecha');
fecha.innerHTML = new Date().getFullYear();

// ********** desplegar links **********

const btnNav = document.querySelector('.btn-nav');
const contenedor = document.querySelector('.links-contenedor');
const links = document.querySelector('.links');

btnNav.addEventListener('click', ()=>{
    const contenedorHeight = contenedor.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(contenedorHeight === 0){
        contenedor.style.height = `${linksHeight}px`;
    }
    else{
        contenedor.style.height = `0px`;
    }
});

// ********** navbar fixed **********

const navbar = document.querySelector('nav');
const volverInicio = document.querySelector('.link-volver');

window.addEventListener('scroll', ()=>{
    const navbarHeigth = navbar.getBoundingClientRect().height;
    const windowHeigth = window.pageYOffset;

    if(windowHeigth >= navbarHeigth){
        navbar.classList.add('nav-fixed');
    }
    else{
        navbar.classList.remove('nav-fixed');
    };

    if(windowHeigth >= 500){
        volverInicio.classList.add('visible');
    }
    else{
        volverInicio.classList.remove('visible');
    };
})

// ********** ajustar scroll **********

const scrollLinks = document.querySelectorAll('.scroll-links')

scrollLinks.forEach((links)=>{
    links.addEventListener('click', (e)=>{
        // prevenir eventos por defectos
        e.preventDefault();
        // obtener id de links
        const id = e.currentTarget.getAttribute('href').slice(1);
        const elemento = document.getElementById(id);
        // obtener altura de navbar
        const navbarHeigth =  navbar.getBoundingClientRect().height;
        const contenedorHeight = contenedor.getBoundingClientRect().height;
        const navbarTamaño = navbarHeigth - contenedorHeight;
        const fixedNav = navbar.classList.contains("nav-fixed");
        let posicion = elemento.offsetTop -navbarHeigth;

        if(!fixedNav){
            posicion -= navbarHeigth;
        }
        else if(navbarHeigth > 132){
            posicion += contenedorHeight;
        }

        window.scrollTo({
            left:0,
            top: posicion,
        })
        contenedor.style.height = 0;
    })
})