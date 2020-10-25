function paresImpares(){
    let numeros = [];
    let pares = [];
    let impares = [];
    let numerosOrdenados = [];
    for (let i=0; i<100; i++){
        numeros[i] = Math.floor(Math.random()*1000)+1;
        if (numeros[i] % 2 == 0){
            pares.push(numeros[i]);
        }else{
            impares.push(numeros[i]);
        }
    }
    console.log(numeros);
    for (let i=0; i<pares.length; i++){
        numerosOrdenados.push(pares[i]); 
    }
    for (let i=0; i<impares.length; i++){
        numerosOrdenados.push(impares[i]); 
    }
    console.log(numerosOrdenados);
}

paresImpares();