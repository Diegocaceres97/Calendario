function click() {
    
const card1 = document.getElementById("cuadro1");
const card2 = document.getElementById("cuadro2");
const card3 = document.getElementById("cuadro3");
const card4 = document.getElementById("cuadro4");
const card5 = document.getElementById("cuadro5");
const agregar = document.getElementById("agregar");
const goals = document.getElementsByClassName("goals");
const img = document.getElementsByClassName("img");

card1.onclick = ()=>{ 

    if(card1.innerText){
        if (confirm('¿Quieres modificar la actividad?')) {
            var person = prompt("Ingresa la actividad que realizaras ahora");
            if (person == null) {
                
            }else{
                card1.childNodes[1].innerText=person;
                localStorage.setItem('Lunes6Am',person);
            }
          } 
    }else{
        var person = prompt("Ingresa la actividad que realizaras");
        if (person != null) {
            let p = document.createElement("p");
            let parrafo = document.createTextNode(person);
            card1.appendChild(parrafo);
        }
        }
 
}
card2.onclick = ()=>{
    if(card2.innerText){
        if (confirm('¿Quieres modificar la actividad?')) {
            var person = prompt("Ingresa la actividad que realizaras ahora");
            if (person != null) {
                card2.childNodes[1].innerText=person;
                localStorage.setItem('Martes6Am',person);
            }
          } 
    }else{
        var person = prompt("Ingresa la actividad que realizaras");
        if (person != null) {
            let p = document.createElement("p");
            let parrafo = document.createTextNode(person);
            card2.appendChild(parrafo);
        }
            
        }
          
}

card3.addEventListener('click',function myFunction() {
    if(card3.innerText){
        if (confirm('¿Quieres modificar la actividad?')) {
            var person = prompt("Ingresa la actividad que realizaras ahora");
            if (person != null) {
                card3.childNodes[1].innerText=person;
                localStorage.setItem('Miercoles6Am',person);
            }
          } 
    }else{
        var person = prompt("Ingresa la actividad que realizaras");
        if (person != null) {
            let p = document.createElement("p");
            let parrafo = document.createTextNode(person);
            card3.appendChild(parrafo);
        }
          
        }
  });

  card4.onclick = ()=>{ 
    if(card4.innerText){
        if (confirm('¿Quieres modificar la actividad?')) {
            var person = prompt("Ingresa la actividad que realizaras ahora");
            if (person != null) {
                card4.childNodes[1].innerText=person;
                localStorage.setItem('Jueves6Am',person);
            }
          } 
    }else{
        var person = prompt("Ingresa la actividad que realizaras");
        if (person != null) {
            let p = document.createElement("p");
            let parrafo = document.createTextNode(person);
            card4.appendChild(parrafo);
        }
        }
}
card5.onclick = ()=>{ 
    if(card5.innerText){
        if (confirm('¿Quieres modificar la actividad?')) {
            var person = prompt("Ingresa la actividad que realizaras ahora");
            if (person != null) {
                card5.childNodes[1].innerText=person;
                localStorage.setItem('Viernes6Am',person);
            }
          } 
    }else{
        var person = prompt("Ingresa la actividad que realizaras");
        if (person != null) {
            let p = document.createElement("p");
            let parrafo = document.createTextNode(person);
            card5.appendChild(parrafo);
        }
        }
}
agregar.onclick = ()=>{
    var person = prompt("Ingresa el objetivo que deseas realizar");
        if (person != null) {
            let objetivos = 0;
            if(localStorage.getItem('objetivos')){
            objetivos = localStorage.getItem('objetivos');
            objetivos = parseInt(objetivos)+1;
            }else{
            localStorage.setItem('objetivos',1);  
            objetivos = 1;              
            }
            img[objetivos].style.visibility="visible";
           let p = document.createElement("p");
           p.innerText=person;
           goals[objetivos].appendChild(p);
           localStorage.setItem('objetivos',objetivos);
           let objetivos_name = `objetivos${objetivos}`;
            localStorage.setItem(objetivos_name,person);
        }
}
}
export default click();