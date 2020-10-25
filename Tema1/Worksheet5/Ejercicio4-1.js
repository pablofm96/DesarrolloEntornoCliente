var mes = prompt("Introduce mes");
switch(mes){
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        document.write(mes+" tiene 31 dias");
        break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        document.write(mes+" tiene 30 dias");
        break;
    case "Febrero":
        document.write(mes+" tiene 28 dias");
        break;
    default:
        document.write("Mes no valido");
        break;
}