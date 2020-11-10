
function validaER(valor, expresion){
    let expresion2 = new RegExp(expresion);
    if (expresion2.test(document.getElementById(valor).value)){
        document.getElementById(valor).style.backgroundColor = "green";
    }else{
        document.getElementById(valor).style.backgroundColor = "red";
    }
}

function comprobarNumero(){
    validaER("telefono", "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$");
    /*let numero = new RegExp('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$');
    if (numero.test(document.getElementById("telefono").value)){
        document.getElementById("telefono").style.backgroundColor = "green";
    }else{
        document.getElementById("telefono").style.backgroundColor = "red";
    }*/
}

function comprobarDNI(){
    validaER("dni", "^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$");
}

function comprobarEmail(){
    validaER("email", '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$');
}

function comprobarUsuario(){
    validaER("usuario", "[a-zA-Z0-9")
}
document.getElementById("telefono").addEventListener("blur", comprobarNumero);
document.getElementById("dni").addEventListener("blur", comprobarDNI);
document.getElementById("email").addEventListener("blur", comprobarEmail);