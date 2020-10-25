function maximo(numero1, numero2, numero3, numero4){
    let numeros = [numero1, numero2, numero3, numero4];
    let maximo = 0;

    for (var i=0; i<numeros.length; i++){
        if (numeros[i]>maximo)
            maximo = numeros[i];
    }
    return maximo;
}

let numero1 = parseInt(prompt("Introduce primer numero"));
let numero2 = parseInt(prompt("Introduce segundo numero"));
let numero3 = parseInt(prompt("Introduce tercer numero"));
let numero4 = parseInt(prompt("Introduce cuarto numero"));
console.log(maximo(numero1, numero2, numero3, numero4));