const valor = document.getElementById('cuenta');
const btn = document.querySelectorAll('input')

let numero = 0;

btn.forEach(input =>{
    input.addEventListener('click', ()=>{
        if (input.value == "INCREMENTAR"){
            numero++;
            valor.textContent = numero;
        }else if (input.value == "DISMINUIR"){
            numero--;
            valor.textContent = numero;
        }else {
            numero = 0;
            valor.textContent = numero;
        }
        if(numero >= 0){
            valor.style.color = "green";
        }else{
            valor.style.color = "red";
        }
    })
})