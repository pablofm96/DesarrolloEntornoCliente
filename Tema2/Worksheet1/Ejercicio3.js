
let contador = 60;

function imprime(){
    console.log(contador);
    contador--;
    
    if(contador>0)
        setTimeout(imprime, 1000);
}

imprime();
