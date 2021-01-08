window.onload=function(){    
    gsap.timeline().from(".img_profile",1,{opacity:0,delay:3,ease:"back",scale:1.5})
    .from(".nickname",1,{y:100,opacity:0},"-=2")
    .from(".et",2,{rotateY:1440,opacity:0},"-=1")
    .from(".download",0.5,{x:150},"-=0.5")
    .from(".whats",0.5,{x:150},"-=0.5")
    .to(".download",0,{delay:1,x:94,transition: "transform 0.8s ease"})
    .to(".whats",0,{x:87,transition: "transform 0.8s ease"});

    gsap.timeline().staggerFrom(".name_left",1,{
        opacity:1,
    },0.2).seek(8).reverse();

    
    TweenMax.staggerFrom(".name_right",1,{
        opacity:0,
    },0.2);

    $(".navbar a").each(function(){
        $(this).click(function(e){
            e.preventDefault();
            var element= $($(this).attr("href")).offset().top;
            $("html, body").animate({
                scrollTop: element-56
            }, 500);
        });
    });
    $(window).scroll(function(){
        if($("#barra").offset().top== $(this).scrollTop() ){
            $("#title_nav").html("River Corona");
        }
        else{
            $("#title_nav").html("");
        }
    });
}


