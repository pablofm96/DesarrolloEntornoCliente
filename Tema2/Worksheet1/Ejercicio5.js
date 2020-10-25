function reloj(){
    let tiempo = new Date();
    console.log(tiempo.getHours()+"/"+tiempo.getMinutes()+"/"+tiempo.getSeconds());

    setTimeout(reloj, 1000);
}

reloj();

