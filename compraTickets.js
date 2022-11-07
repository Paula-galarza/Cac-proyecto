const valorTicket= 200;

var descuentoEstudiante= 80;
var descuentoTrainee= 50;
var descuentoJunior= 15;
//let es una variable local que solo va a funcionar en la función que yo la llame. Despues al resto no

let nombre = document.getElementById ("nombre");
let apellido = document.getElementById ("apellido");
let mail = document.getElementById ("mail");
let cantidadT = document.getElementById ("cantidadT");
let categoriaC = document.getElementById ("categoriaC");
let total = document.getElementById ("total");


function quitarClaseError(){
    let x = document.querySelectorAll(".form-control", ".form-select");
    let i;
    for (i = 0; i < x.length; i++) {
        x [i].classList.remove('is-invalid');
}
}
function resetTotalAPagar(){
    quitarClaseError();
    total.innerHTML = "";

    
}   

//para saber si el correo electronico es correcto
const emailValido = mail => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}



function TotalAPagar() {

   quitarClaseError();



    if(nombre.value === "") {
        alert("escriba su nombre");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    if(apellido.value === "") {
        alert("escriba su apellido");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if(mail.value === "") {
        alert("escriba su correo electrónico");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }


    if(!emailValido(mail.value)) {
        alert("escriba un correo electrónico válido");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    //Quiere decir que al menos tiene que estar ingresado 1 cant.de tickets, sino que salga error

    if(cantidadT.value === "") {
        alert("ingrese la cantidad de tickets");
        cantidadT.classList.add("is-invalid");
        cantidadT.focus();
        return;
    }

    if(categoriaC.value === "") {
        alert("seleccione una categoria");
        categoriaC.classList.add("is-invalid");
        categoriaC.focus();
        return;
    }
}

    //Se multiplica la cantidad de tickets por el valor
    var totalValorTickets=(cantidadT.value * valorTicket);
    //Sirve para aplicar los descuentos. Segun la categoria optimizar con un switch o con if aninado y else
    
    if (categoriaC.value === "0") {
        totalValorTickets= parseFloat(prompt())

    }else{
        if (categoriaC == 1) {
        totalValorTickets= totalValorTickets - (0.8 * totalValorTickets /100);
    }else{
        if (categoriaC == 2) {
        totalValorTickets= totalValorTickets - (0.5 * totalValorTickets /100);
    }else{
        if (categoriaC== 3) {
        totalValorTickets= totalValorTickets - (0.15 * totalValorTickets /100);
        }
    }
    }
        
    }


   /* switch (categoriaC) {
        case 0:
            total.innerHTML= (totalValorTickets= totalValorTickets)
            break;
        case 1:
            total.innerHTML= totalValorTickets -(descuentoEstudiante * totalValorTickets /100);
            break;
        case 2:
            total.innerHTML= totalValorTickets -(descuentoTrainee * totalValorTickets /100);
            break;
        case 3:
            total.innerHTML= totalValorTickets -(descuentoJunior * totalValorTickets /100);
            break;
            
    }*/
    

//va el valor en el HTML
total.innerHTML= totalValorTickets;


//El botón recibe un escuchador
botonResumen.addEventListener ('click', TotalAPagar);

borrar.addEventListener ('click', resetTotalAPagar);

