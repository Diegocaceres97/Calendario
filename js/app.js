import  click  from "./dialogs.js";

const img = document.getElementsByClassName("img");
/*  Verify content localStorage */
if(localStorage.getItem("Lunes6Am")){
    let valor = localStorage.getItem("Lunes6Am");
    const card1 = document.getElementById("cuadro1");
    card1.childNodes[1].innerText=valor;
}
if(localStorage.getItem("Martes6Am")){
    let valor = localStorage.getItem("Martes6Am");
    const card2 = document.getElementById("cuadro2");
    card2.childNodes[1].innerText=valor;
}
if(localStorage.getItem("Miercoles6Am")){
    let valor = localStorage.getItem("Miercoles6Am");
    const card3 = document.getElementById("cuadro3");
    card3.childNodes[1].innerText=valor;
}
if(localStorage.getItem("Jueves6Am")){
    let valor = localStorage.getItem("Jueves6Am");
    const card4 = document.getElementById("cuadro4");
    card4.childNodes[1].innerText=valor;
}
if(localStorage.getItem("Viernes6Am")){
    let valor = localStorage.getItem("Viernes6Am");
    const card5 = document.getElementById("cuadro5");
    card5.childNodes[1].innerText=valor;
}
if(localStorage.getItem('objetivos')){
    const goals = document.getElementsByClassName("goals");
    let cont = parseInt(localStorage.getItem('objetivos'));
    for(let i = 1;i<=cont;i++){
    let p = document.createElement("p");
    let name = `objetivos${i}`;
            img[i].style.visibility="visible";
           p.innerText= localStorage.getItem(name);
           goals[i].appendChild(p);
    }
}
const card = document.getElementById("cards");
