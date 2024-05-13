
let  botom = document.querySelector('#boton');
let showclicks= document.querySelector('#showdata');
let counter = 0; 




function printclick(){

    counter++;
    console.log("presional el boton")
    showclicks.innerHTML = "Cantidad de clicks realizados:" + counter;
}


botom.addEventListener('click',printclick);

    
    