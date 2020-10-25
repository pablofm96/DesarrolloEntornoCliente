var numero1 = parseInt(prompt("Introduce primer numero"));
var numero2 = parseInt(prompt("Introduce segundo numero"));
var operacion = prompt("Introduce +, -, * o /");

switch(operacion){
    case "+":
        document.write(numero1+numero2);
        break;
    case "-":
        document.write(numero1-numero2);
        break;
    case "*":
        document.write(numero1*numero2);
        break;
    case "/":
        document.write(numero1/numero2);
        break;
    default:
        document.write("Operador no valido");
        break;
}