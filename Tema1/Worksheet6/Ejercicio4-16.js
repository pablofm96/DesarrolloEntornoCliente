var numero1 = parseInt(prompt("Introduce numero a adivinar"));
var numero2 = parseInt(prompt("Adivina el numero "));

do{
    if (numero2>numero1){
        alert("El numero es menor");
        numero2 = parseInt(prompt("Introduzca numero"));
    }else{
        alert("El numero es mayor");
        numero2 = parseInt(prompt("Introduzca numero"));
    }
} while(numero2!=numero1)
alert("Has acertado");