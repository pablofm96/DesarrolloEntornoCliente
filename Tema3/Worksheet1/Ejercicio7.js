function factorial(numero){
    let resultado = numero;
    for (let i=1; i<numero; i++){
        resultado *= i;
    }
    
    return resultado;
}

function factorial(){
    let resultado = 1;
    for (let i=1; i<10; i++){
        for (let j=1; j<=i; j++){
            resultado = i*j;
        }
    }
    
    return resultado;
}

let numero = parseInt(prompt("Introduce numero"));
console.log(factorial(3));