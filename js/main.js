$(document).ready(function(){
    //변수
    var slidemove=$(".slide-con").width(); 


    // nav
    $("#gnb .nav-sub, .nav-main").hover(function(){
        $("#gnb .nav-sub").stop().slideDown(200);
    },function(){
        $("#gnb .nav-sub").stop().slideUp(200);
    });

    $(".nav-main ul li a").removeClass('active'); 
    $(".nav-main ul li a").hover(function(){
        $(this).addClass('active'); 
    },function(){
        $(".nav-main ul li a").removeClass('active'); 
    });
    $(".nav-sub .sub").hover(function(){
        var gnbmove=$(this).index();
        $(".nav-main ul li a").eq(gnbmove).addClass('active');
    },function(){
        $(".nav-main ul li a").removeClass('active');
    });


    // slide    
    function slmove(){
        $(".slide-box").animate({
            left: -slidemove
        },function(){
            $(".slide-con:first-child").appendTo(".slide-box");
            $(".slide-box").css({
                left: 0
            });
        });
    }
    setInterval(slmove, 3000);


    // pop
    $(".notice ul li:first-child").on('click',function(){
        $("#pop").show();
    });
    $("#pop button").on('click',function(){
        $("#pop").hide();
    });

});