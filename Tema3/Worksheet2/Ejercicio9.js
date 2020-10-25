let nuevoArray = new Array(2);
nuevoArray[0] = new Array();
nuevoArray[1] = new Array();

function arrayCero(numeros){
    for (let i=0; i<10; i++){
        numeros[0][i] = 0;
    }
    return numeros;
}

function sumarUno(numeros){
    for (let i=0; i<10; i++){
        numeros[1][i] = numeros[0][i]+1;
    }
    return numeros;
}

function imprimirArray(numeros){
    let tabla = "<table border=1><tr>";
    for (let i=0; i<numeros[0].length; i++){
        tabla += "<td>";
        tabla += numeros[0][i]+"</td>";
    }
    tabla += "</tr><tr>"
    for (let i=0; i<numeros[1].length; i++){
        tabla += "<td>";
        tabla += numeros[1][i]+"</td>";
    }
    tabla += "</tr></table>";
    return tabla;
}

console.log(arrayCero(nuevoArray));
console.log(sumarUno(nuevoArray));
document.write(imprimirArray(nuevoArray));