function lanzamiento(){
    resultado = Math.floor(Math.random()*6+1);
    return resultado;
}
for (i=0; i<5999; i++){
    console.log(lanzamiento());
}