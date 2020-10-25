let numero = [];

function arrayCero(numeros){
    for (let i=0; i<10; i++){
        numeros[i] = 0;
    }
    return numeros;
}

function sumarUno(numeros){
    for (let i=0; i<10; i++){
        numeros[i] += 1;
    }
    return numeros;
}

function imprimirArray(numeros){
    for (let i=0; i<numeros.length; i++){
        document.write(numeros[i]+"<br>");
    }
}
console.log(arrayCero(numero));
console.log(sumarUno(numero));
imprimirArray(numero);

