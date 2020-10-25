function palabracuadrada(palabra){
    var final = "";
    var x = palabra.length;
    var x2 = palabra.length;
    var inversa = "";
  
    while (x>=0) {
      inversa = inversa + palabra.charAt(x);
      x--;
    }
  
    var tabla="<table>";
    for(var i =0;i<x2;i++){
        tabla += "<tr>";
        for(var j =0;j<x2;j++){
          tabla+= "<td>";
          if (i==0)
            tabla+= palabra[j]+"</td>";
          else if ( i== x2 -1)
            tabla+= inversa[j]+"</td>";
            else {
              if (j==0) tabla+= palabra[i]+"</td>";
              else if (j==x2-1) tabla+= inversa[i]+"</td>";
            }
        }
        tabla+="</tr>";
    }
    tabla+="</table>"
  
    document.write("Entrada: "+palabra+"<br>");
    document.write("Salida: <br>");
    document.write(tabla);
  }
  
  palabracuadrada("ARRIBAESPAÑITA");