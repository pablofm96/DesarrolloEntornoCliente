function añadirElemento(){
    if (document.getElementById("elemento").value == ""){
        console.log("casilla vacia");
    }else{
        let lista = document.createElement("li");
        let elemento = document.createTextNode(document.getElementById("elemento").value);
        lista.appendChild(elemento);
        document.getElementById("lista").appendChild(lista);
        document.getElementById("elemento").value = "";
        document.getElementById("elemento").focus();
    }
}

document.getElementById("anadir").addEventListener("click", añadirElemento);