$('div > p:eq(0)').css("font-size", 10);
$('div > p:eq(1)').css("font-size", 15);
$('div > p:eq(2)').css("font-size", 20);

$('h3:eq(0)').click(function(){
    $(this).hide()
});

$('h3:eq(1)').click(function(){
    $(this).hide()
});

$('h3:eq(2)').click(function(){
    $(this).hide()
});

$('p:eq(0)').hover(function(){
    $(this).css("background-color", "red");
}, function(){
    $(this).css("background-color", "white");
})

$('p:eq(1)').hover(function(){
    $(this).css("background-color", "green");
}, function(){
    $(this).css("background-color", "white");
})

$('p:eq(2)').hover(function(){
    $(this).css("background-color", "blue");
}, function(){
    $(this).css("background-color", "white");
})