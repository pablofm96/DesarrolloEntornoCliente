let numero1 = Math.random();
let numero2 = Math.floor(Math.random()*(200-100+1))+100;

let numero3 = parseInt(prompt("Introduce desde que numero"));
let numero4 = parseInt(prompt("Introduce hasta que numero"));
let numero5 = Math.floor(Math.random()*(numero4-numero3+1))+numero3;

console.log(numero1);
console.log(numero2);
console.log(numero5);