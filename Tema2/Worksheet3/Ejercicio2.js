function comprobarPalabra(cad_arg){
    let cadena = new String();
    cadena = cad_arg;
    let mayuscula = false;
    let minuscula = false;
    for (let i=0; i<cadena.length; i++){
        if (cadena.charAt(i) == cadena.charAt(i).toUpperCase()){
            mayuscula = true;
        }else{
            minuscula = true;
        }
    }
    if (mayuscula & minuscula){
        document.write (cadena+"<br>Esta formado por mayusculas y minisculas");
    }else{
        if (mayuscula & !minuscula){
            document.write(cadena+"<br> Esta formado solo por mayusculas");
        }else{
            document.write(cadena+"<br> Esta formado solo por minusculas");
        }
    }
}
let palabra = prompt("Introduce palabra");
comprobarPalabra(palabra);
