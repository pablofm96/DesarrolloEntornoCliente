function aumentarTamaño(e){
    let tamaño = document.getElementById("parrafo").style.fontSize;
    let tamaño1 = tamaño.split("%");
    tamaño = parseInt(tamaño1[0])+25;
    tamaño = tamaño.toString();
    //console.log(tamaño);
    let parrafos = document.querySelectorAll("p");
    for (let i=0; i<parrafos.length; i++){
        parrafos[i].style.fontSize = tamaño + "%";        
    }
    //console.log(parrafos);
    
}

function tamañoNormal(e){
    let parrafos = document.querySelectorAll("p");
    for (let i=0; i<parrafos.length; i++){
        parrafos[i].style.fontSize = "100%";
    }
}

function reducirTamaño(e){
    let tamaño = document.getElementById("parrafo").style.fontSize;
    let tamaño1 = tamaño.split("%");
    tamaño = parseInt(tamaño1[0])-25;
    tamaño = tamaño.toString();
    console.log(tamaño);
    let parrafos = document.querySelectorAll("p");
    for (let i=0; i<parrafos.length; i++){
        parrafos[i].style.fontSize = tamaño + "%";        
    }
}