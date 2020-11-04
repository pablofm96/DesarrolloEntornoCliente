window.onload = main();


function mover(e){
    if (e.ctrlKey == true){
        e.target.style.backgroundColor="red";
    }else if (e.shiftKey == true){
        e.target.style.backgroundColor="blue";
    }else if (e.altKey == true){
        e.target.style.backgroundColor="white";
    }
}

function main(){
    tabla = "";
    tabla += "<table>";
    
    for (let i=0; i<100; i++){
        
        tabla += "<tr>"
        
        for (let j=0; j<100; j++){
            tabla += "<td onmousemove='mover(event)'></td>";
        }

        tabla += "</tr>";

    }

    tabla += "</table>";

    document.getElementById("tabla").innerHTML = tabla;
}
document.addEventListener('keypress',  function(e){
    if (e.keyCode === 84)
        document.getElementById("tabla").remove();
});
