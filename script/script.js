"use strict";
console.clean;

const button = document.getElementById('onOff')
const img = document.getElementById('luce')
button.addEventListener('click', accesoSpento)

function accesoSpento(){
    if (img.src.includes("white")){
        img.src = "img/yellow_lamp.png";
        button.innerHTML = "Spegni Luce";
        button.classList.toggle("bgViolet");
    } else if(img.src.includes("yellow")){
        img.src = "img/white_lamp.png";
        button.innerHTML = "Accendi Luce";
        button.classList.toggle("bgViolet");
    }
}
// elem.classList.contains("class")