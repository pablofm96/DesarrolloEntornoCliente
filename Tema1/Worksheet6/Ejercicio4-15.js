var numero1 = parseInt(prompt("Introduce numero a adivinar"));
var numero2 = parseInt(prompt("Adivina el numero "));

while (numero2!=numero1){
    if (numero2>numero1){
        alert("El numero es menor");
        numero2 = parseInt(prompt("Introduzca numero"));
    }else{
        alert("El numero es mayor");
        numero2 = parseInt(prompt("Introduzca numero"));
    }
}
alert("Has acertado");