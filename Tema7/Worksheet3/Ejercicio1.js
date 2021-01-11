function tabla(){
    let body = document.getElementsByTagName("body")[0];
    let tabla = document.createElement("table");
    for (let i=0; i<8; i++){
        let fila = document.createElement("tr");
        let columna = document.createElement("td");

        fila.appendChild(columna);
        tabla.appendChild(fila);
    }
   
    body.appendChild(tabla);        

    $("td").css("width", "50");
    $("td").css("height", "50");
    $("tr:gt(2)").css("backgroundColor", "red");
    $("tr:lt(2)").css("backgroundColor", "blue");
}

tabla();