let contador = 0;
let fotos = document.getElementsByTagName("img");
for (let i=1; i<fotos.length; i++){
    fotos[i].style.visibility = "hidden";
}
function siguienteFoto(){
    contador ++;
    if (contador >= fotos.length){
        contador = 0;
        fotos[contador].style.visibility = "visible";
        fotos[fotos.length-1].style.visibility = "hidden";
    }else{
        fotos[contador].style.visibility = "visible";
        fotos[contador-1].style.visibility = "hidden";
    }
}

function anteriorFoto(){
    if (contador == 0){
        contador = fotos.length;
        fotos[contador-1].style.visibility = "visible";
        fotos[0].style.visibility = "hidden";
    }else{
        fotos[contador-1].style.visibility = "visible";
        fotos[contador].style.visibility = "hidden";
    }
    contador--;
}

document.getElementById("siguiente").addEventListener("click", siguienteFoto);
document.getElementById("anterior").addEventListener("click", anteriorFoto);