/**
 * Created by Meta Luo on 2015/11/13.
 */
$(document).ready(function(){
    $(".leftguide a").on("mouseover",function(){
        $(this).css("background","#2ecc71").children(".sub-item").css("opacity",1)
    }).on("mouseleave",function(){
        $(this).css("background","").children(".sub-item").css("opacity",0.3)
    })
    $("#lefta1").css({"background":"#2ecc71"}).children(".sub-item").css("opacity",1)
})