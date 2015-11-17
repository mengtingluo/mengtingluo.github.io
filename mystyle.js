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
    $(function(){
        $(".box .button").hover(function(){
            var title=$(this).attr("data-title");
            $(".tooltip em").text(title)
            var pos=$(this).offset().left;
            $(".tooltip").css({"left":pos-540+"px"}).animate({"opacity":1,"top":120},300)
        },function(){
        $(".tooltip").animate({"opacity":0,"top":100},300)
       })
    })
       $(function(){
           $(".lefthead a").hover(function(){
               var title=$(this).attr("data-title");
               $(".tooltip em").text(title)
               var pos=$(this).offset().left;
               $(".tooltip").css({"left":pos-450+"px",top:"-400px"}).animate({"opacity":1,"top":-200},300)
           },function(){
               $(".tooltip").animate({"opacity":0,"top":-180},300)
           })
       })
    $(function(){
        $(".leftguide a").hover(function(){
            var title=$(this).attr("data-title");
            $(".tooltip em").text(title)
            var pos=$(this).offset().top;
            $(".tooltip").css({"top":-300+pos+"px"}).animate({"opacity":1,"left":"-400px"},300)
        },function(){
            $(".tooltip").animate({"opacity":0,"left":"-350px"},300)
        })
    })
    $(function(){
        $(".bigtitle a").hover(function(){
            var title=$(this).attr("data-title");
            $(".tooltip em").text(title)
            var pos=$(this).offset().left;
            $(".tooltip").css({"left":pos-400+"px"}).animate({"opacity":1,"top":250},300)
        },function(){
            $(".tooltip").animate({"opacity":0,"top":200},300)
        })
    })
})
