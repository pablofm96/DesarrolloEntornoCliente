let a = parseInt(prompt("Introduce primer numero(a)"));
let b = parseInt(prompt("Introduce segundo numero(b)"));
let c = parseInt(prompt("Introduce tercer numero(c)"));


let solucion1 = ((-b) +(Math.sqrt((Math.pow(b,2) - (4*a*c)))))/(2*a);

let solucion2 = ((-b) -(Math.sqrt((Math.pow(b,2) - (4*a*c)))))/(2*a);

document.write("Primesa solucion: "+solucion1)+"<br>";
document.write("Segundo solucion: "+solucion2);
