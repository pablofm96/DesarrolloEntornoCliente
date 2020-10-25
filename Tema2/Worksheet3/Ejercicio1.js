
function inverteCadena(cad_arg){
    let cadena = cad_arg;
    let tamañoCadena = cadena.length;
    let cadenaInvertida = "";
    
    while (tamañoCadena >= 0){
        cadenaInvertida += cadena.charAt(tamañoCadena);
        tamañoCadena--;    
    }
    console.log("Ejercicio 1");
    console.log(cadenaInvertida);
}

function inviertePalabras(cad_arg){
    let cadena = cad_arg;
    let palabras = cadena.split(' ');
    document.write("<br> Ejercicio 2 <br>");

    for (let i=palabras.length-1; i>=0; i--){
        document.write(palabras[i]+" ");
    }    
}

function encuentraPalabraMasLarga(cad_arg){
    let cadena = cad_arg;
    let palabras = cadena.split(' ');
    let palabraLarga = "";

    for (let i=0; i<palabras.length; i++){
        if (palabraLarga.length < palabras[i].length)
            palabraLarga = palabras[i];  
    }
    document.write("<br> Ejercicio 3");
    document.write("<br>"+palabraLarga);
    /* let palMaslarga="";
    for (pal of palabras){
        if (pal.length > palMaslarga.length)
            palMaslarga = pal;
    }*/
}

function filtraPalabraMasLargas(cad_arg, i){
    let cadena = cad_arg;
    let palabras = cadena.split(' ');
    let numeroCaracteres = i;
    let contador = 0;
    
    for (let j=0; j<palabras.length; j++){
        if (palabras[j].length >= numeroCaracteres )
            contador++;
    }

    console.log("Ejercicio 4");
    console.log(contador);
}

function cadenaBienFormada(cad_arg){
    let cadena = new String()
    cadena = cad_arg;
    let palabra = "";
    for (let i=0; i<cadena.length; i++){
        if ( i== 0){
            palabra += cadena.charAt(0).toUpperCase();
        }else{
            palabra += cadena.charAt(i).toLowerCase();
        }
    }
    document.write("<br> Ejercicio 5");
    document.write("<br> "+palabra);
    
}

inverteCadena("Hola");
inviertePalabras("Hola adios");
encuentraPalabraMasLarga("<br> Hola adios ola estudiar djskadjaskjdlsjkdjaskljdasldalksad");
filtraPalabraMasLargas("Hola adios ol", 3);
cadenaBienFormada("hOLA");