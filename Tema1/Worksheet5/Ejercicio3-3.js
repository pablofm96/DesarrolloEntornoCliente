var edad = parseInt(prompt("Introduce tu edad"));

if (edad<=5){
    document.write("Jardin de infacia");
}else{
    if(edad>=6 && edad<=11 ){
        document.write("Primaria");
    }else{
        if(edad>=12 && edad<=16){
            document.write("ESO");
        }else{
            if(edad>=17 && edad<=21){
                document.write("Bachillerato o ciclos");
            }else{
                document.write("Universidad");
            }
        }
    }
}