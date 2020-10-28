/*var pulsada = false;
function imagenPulsada(){
    pulsada = !pulsada;
}

function mover(e){
    if(pulsada){
        console.log("Las coordenadas son"+e.x);
        e.style.backgro
    }   
} */

var imagenes=document.querySelectorAll("img");
imagenes.forEach(function(imagen){
    imagen.addEventListener("dragend", function(e){
        imagen.style.cssText="position: absolute; top: "+e.y+"; left: "+e.x+";";
    });
});