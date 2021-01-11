$("input#password").keydown(function(){
    if ($(this).val().length < 5){
        $("p").text("Clave no segura");
    }else if ($(this).val().length >= 5 && $(this).val().length < 8){
        $("p").text("Clave medio segura");
    }else{
        $("p").text("Clave muy segura");
    }
})