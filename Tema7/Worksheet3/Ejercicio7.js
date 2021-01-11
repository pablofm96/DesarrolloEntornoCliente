$("button#play").click(function(){
    let div = $("div");
    
    div.animate({height: "500px"}, "slow");
    div.animate({width: "500px"}, "slow");
    div.animate({height: "100px"}, "slow");
    div.animate({width: "100px"}, "slow");
})

$("button#stop").click(function(){
    $("div").stop();
})