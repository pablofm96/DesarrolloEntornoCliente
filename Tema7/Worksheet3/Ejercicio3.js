function tabla(){
    let body = document.getElementsByTagName("body")[0];
    let tabla = document.createElement("table");
    for (let i=0; i<8; i++){
        let fila = document.createElement("tr");
        let columna = document.createElement("td");

        /*let texto = document.createTextNode("Hola");
        columna.appendChild(texto);*/

        fila.appendChild(columna);
        tabla.appendChild(fila);
    }
   
    body.appendChild(tabla);
    $("td").css("border", "solid 1px");
    $("td").css("height", "50");
    $("td").css("width", "50");

    if ($("td").is(":empty")){
        $("td").css("background-color", "yellow");
    }else{
        console.log("Error");
    }
    
}


tabla();