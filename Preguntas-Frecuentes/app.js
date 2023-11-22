const pregunta = document.querySelectorAll('.pregunta');

pregunta.forEach( opc => {

    const btn = opc.querySelector('.btn-pregunta');

    // console.log(btn)

    btn.addEventListener("click", ()=>{

        pregunta.forEach( item =>{
            if(item !== opc){
                item.classList.remove("texto-active")
            }
        })

        opc.classList.toggle("texto-active")
    })

})