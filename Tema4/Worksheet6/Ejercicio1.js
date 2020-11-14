function recogerNombre(){
    let nombre = document.getElementById("nombre").value;
    document.cookie = "nombre="+nombre;
}
if (document.cookie = ""){
    recogerNombre();
}
let nombre1 = getCookie("nombre");
document.getElementById("cerrarSesion").style.visibility = "hidden";
if (nombre1){
    saludo();
}
function saludo(){
    recogerNombre();
    nombre1 = getCookie("nombre");
    document.getElementById("nombre").style.visibility = "hidden";
    document.getElementById("labelNombre").style.display = "none";
    document.getElementById("saludo").innerHTML="Hola "+nombre1;
    document.getElementById("botonIniciar").style.display = "none";
    document.getElementById("cerrarSesion").style.visibility = "visible";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function cierraSesion(){
    document.getElementById("saludo").innerHTML="Adios "+nombre1;
    document.cookie = "nombre="+nombre1+"; expires=Thu, 18 Dec 2013 12:00:00 UTC;";
    document.getElementById("cerrarSesion").style.visibility = "hidden";
}
document.getElementById("botonIniciar").addEventListener("click", saludo);
document.getElementById("cerrarSesion").addEventListener("click", cierraSesion);

/*if (nombre1){
    saludo();
}else{
    //console.log("cookie vacia");
    document.getElementById("cerrarSesion").style.display = "none";
}*/