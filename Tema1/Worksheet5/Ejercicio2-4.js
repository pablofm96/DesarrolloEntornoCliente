var numero = parseFloat(prompt("Introduce numero"));

if (numero>100){
    numero = numero-numero*15/100;
    document.write(numero);
}