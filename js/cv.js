$(function(){
	var _top;
    var top1 = $("#section2").offset().top-30;
	var top2 = $("#section3").offset().top-30;
    var top3 = $("#section4").offset().top-30;
    var top4 = $("#section5").offset().top-30;
    var top5 = $("#section6").offset().top-30;
    var top6 = $("#section7").offset().top-30;
    var tops = [top1,top2,top3,top4,top5,top6];
    $(window).resize();
	// 菜单点击
	$("#more").on("click", function () {
        $(".mobileMenu").stop().slideToggle(300);
    });
    $(".mobileMenu li").click(function () {
       $(".mobileMenu").slideUp(300)
    });
    //导航高亮
    $(".mobileMenu li").bind("click", function () {
        var index = $(this).index();//获取序号
        $(".mobileMenu li").eq(index).addClass("active").siblings().removeClass("active");
        $(".menu > li").eq(index).addClass("active").siblings().removeClass("active");
    });
     //关于我
    $("#about").bind("click", function () {
       $(".nav > li:nth-child(1)").click();
    });
    //我的作品
    $("#work").bind("click", function () {
        $(".nav > li:nth-child(3)").click();
    });
    //导航点击
    $(".nav > li").bind("click", function () {
        var index = $(this).index();//获取序号
        $(".nav li").eq(index).addClass("active").siblings().removeClass("active");
        $(".mobileMenu li").eq(index).addClass("active").siblings().removeClass("active");
        _top = $(".section").eq(index+1).offset().top; //获取对应div距顶高度
        moveTo();
    });
    //回到顶部
    $("#top").click(function () {
        $('html,body').stop().animate({
            scrollTop: 0
        }, 700);
    });
	function moveTo(){
	    $('html,body').animate({
	        scrollTop: _top
	    }, 500);
	}	
	$(window).scroll(function () {
        var s = $(window).scrollTop();
        s > top1 ? $('#navBar').addClass("fixedMenu") : $('#navBar').removeClass("fixedMenu");
        if((s>top1)&&(s<top2)){
            $(".menu li").eq(0).addClass("active").siblings().removeClass("active");
            $(".mobileMenu li").eq(0).addClass("active").siblings().removeClass("active");
            $("#section2").addClass("active");
        }else if((s>top2)&&(s<top3)){
            $(".menu li").eq(1).addClass("active").siblings().removeClass("active");
            $(".mobileMenu li").eq(1).addClass("active").siblings().removeClass("active");
            $("#section3").addClass("active");
        }else if((s>top3)&&(s<top4)){
            $(".menu li").eq(2).addClass("active").siblings().removeClass("active");
            $(".mobileMenu li").eq(2).addClass("active").siblings().removeClass("active");
            $("#section3").addClass("active");
        }else if((s>top4)&&(s<top5)){
            $(".menu li").eq(3).addClass("active").siblings().removeClass("active");
            $(".mobileMenu li").eq(3).addClass("active").siblings().removeClass("active");
            $("#section3").addClass("active");
        }else if((s>top5)&&(s<top6)){
            $(".menu li").eq(4).addClass("active").siblings().removeClass("active");
            $(".mobileMenu li").eq(4).addClass("active").siblings().removeClass("active");
            $("#section3").addClass("active");
        }
    });
})














