const texto = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Condimentum id venenatis a condimentum. Pretium lectus quam id leo in vitae turpis. Velit scelerisque in dictum non consectetur a erat nam at. Condimentum mattis pellentesque id nibh. Purus gravida quis blandit turpis.',
    'Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. A cras semper auctor neque vitae. Sed tempus urna et pharetra pharetra. Tellus orci ac auctor augue mauris augue neque. Velit sed ullamcorper morbi tincidunt ornare massa eget. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Pellentesque nec nam aliquam sem et tortor. Turpis nunc eget lorem dolor sed viverra ipsum nunc.',
    'Suscipit adipiscing bibendum est ultricies integer quis auctor. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Lobortis scelerisque fermentum dui faucibus. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Congue quisque egestas diam in arcu cursus euismod quis viverra. Et netus et malesuada fames ac.',
    'Massa vitae tortor condimentum lacinia quis vel eros donec. Porta non pulvinar neque laoreet suspendisse. Tristique senectus et netus et malesuada fames ac. Non odio euismod lacinia at quis risus sed. Venenatis cras sed felis eget velit aliquet sagittis id. Faucibus a pellentesque sit amet porttitor eget dolor.',
    'Sit amet justo donec enim diam. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Convallis aenean et tortor at. Mi quis hendrerit dolor magna eget. Sit amet volutpat consequat mauris nunc. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Consequat nisl vel pretium lectus quam id leo in.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit euismod in pellentesque. Id cursus metus aliquam eleifend mi. In fermentum posuere urna nec tincidunt praesent semper feugiat. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra.',
    'Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Sit amet justo donec enim diam vulputate ut pharetra. Sit amet consectetur adipiscing elit. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Tristique nulla aliquet enim tortor at auctor urna. Lacus viverra vitae congue eu consequat ac felis donec et. Sit amet risus nullam eget felis eget nunc. ',
    'Tortor dignissim convallis aenean et tortor at risus. Tellus at urna condimentum mattis pellentesque id nibh tortor. Massa placerat duis ultricies lacus. Pellentesque sit amet porttitor eget dolor. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Odio pellentesque diam volutpat commodo sed. Nisl purus in mollis nunc sed id semper risus. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Fermentum dui faucibus in ornare quam viverra orci.',
    'Molestie at elementum eu facilisis sed odio morbi. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Viverra suspendisse potenti nullam ac.',
    'Amet est placerat in egestas erat imperdiet sed euismod. Purus ut faucibus pulvinar elementum integer. Interdum varius sit amet mattis vulputate enim nulla. Tellus elementum sagittis vitae et leo. At varius vel pharetra vel turpis nunc.',
];

const formulario = document.querySelector('.lorem-formulario');
const cantidad = document.getElementById('cantidad');
const resultado = document.querySelector('.lorem-texto');

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const valor = parseInt(cantidad.value);
    const random  =  Math.floor(Math.random() * texto.length);

    // vacio
    // -1
    // >9

    if(isNaN(valor) || valor < 0 || valor > 9){
        resultado.innerHTML = `<p>${texto[random]}</p>`
    }
    else {
        let textoTemporal =  texto.slice(0,valor);
        textoTemporal = textoTemporal.map((item)=>{
            return `<p>${item}</p><br><br>`
        })
        .join("");
        resultado.innerHTML = textoTemporal;
    }
})