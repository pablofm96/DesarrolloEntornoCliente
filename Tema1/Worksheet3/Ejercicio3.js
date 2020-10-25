var edadActual = parseInt(prompt("Introduce tu edad"));
var edadFinal = parseInt(prompt("Introduce tu edad de muerte"));
var amount = parseInt(prompt("Introduce cantidad de consumo por dia"));
var age = edadFinal-edadActual;



for (var i=0; i<3; i++){
    function calculateSupply(age, amount){
    var total = amount*365*age;
    document.write("You will need " + total +" to last you until the ripe old age of X");
    }
}
