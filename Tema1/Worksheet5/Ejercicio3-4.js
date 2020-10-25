var hermanos = parseInt(prompt("Introduce numero de hermanos"));
var cantidad = parseInt(prompt("Introduce cantidad"));

if (hermanos == 0){
    document.write(cantidad);
}else{
    if (hermanos<3){
        cantidad = cantidad - cantidad*5/100;
        document.write(cantidad);
    }else{
        cantidad = cantidad - cantidad*15/100;
        document.write(cantidad);
    }
}