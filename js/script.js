/**
 * Created by bh on 2016/3/25.
 */

$(function(){
    $("#aboutme button").hover(function(){
        $("#aboutme button p").css("color","#fff")
    },function(){
        $("#aboutme button p").css("color","#616e7c")
    });
    //页面滑动
    $(".nav").singlePageNav({
        offset:50
    });
    //小屏幕导航跳转
    $(".navbar-collapse a").click(function(){
        $(".navbar-collapse").collapse("hide");
    });
    new WOW().init();

    $(".hover-item").hover(function(){
        $("h4",this).css({"opacity":"1","-webkit-transform":"translateY(0)","transform":"translateY(0)","-webkit-backface-visibility":"hidden"});
        $("i",this).css({"opacity":"1","-webkit-transform":"translateY(100%)","transform":"translateY(100%)"});
    },function(){
        $("h4",this).css({"opacity":"0","-webkit-transform":"translateY(100%)","transform":"translateY(100%)"});
        $("i",this).css({"opacity":"0","-webkit-transform":"translateY(0)","transform":"translateY(0)"});
    });




    $(window).bind('scroll', function() {
        //var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > 530) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

//create instance
    $(window).bind('scroll', function() {
        var skillHeight = $("#skills").offset().top -200;
        if ($(window).scrollTop() > skillHeight) {
            $('.chart').easyPieChart({
                animate: 2000,
                barColor:"#529FF1",
                lineCup:"round"
            });

            //update instance after 5 sec
            setTimeout(function() {
                $('.chart').data('easyPieChart')
            }, 5000);
        }
    });


})


