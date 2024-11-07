"use strict";
console.clean;

const button = document.getElementById('onOff')
const img = document.getElementById('luce')
button.addEventListener('click', accesoSpento)

function accesoSpento(){
    if (button.innerHTML.includes("Accendi")){
        img.src = "img/yellow_lamp.png";
        button.innerHTML = "Spegni Luce";
        // button.classList.remove("backgroundColor");
    } else if(button.innerHTML.includes("Spegni")){
        img.src = "img/white_lamp.png";
        button.innerHTML = "Accendi Luce";
        // button.classList.toggle("backgroundColor");
    }
}
