var imagenes=document.querySelectorAll("img");
imagenes.forEach(function(imagen){
    imagen.addEventListener("dragend", function(e){
        imagen.style.cssText="position: absolute; top: "+e.y+"; left: "+e.x+";";
    });
});
