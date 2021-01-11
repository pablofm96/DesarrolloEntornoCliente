$("button#start").click(function(){
    let div = $("div");

    div.fadeIn(1200);
    div.css("background-color", "blue").animate({left: "500px"}, "slow");
    div.animate({top: "200px"}, "slow").fadeOut("slow");
})


$("button#stop").click(function(){
    $("div").stop(true);
})