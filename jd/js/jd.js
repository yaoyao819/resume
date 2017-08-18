/**
 * Created by bhan on 2016/2/24.
 */
// 顶部手机京东
$(function() {
    $(".top_right1").hover(function () {
        $(".r11").animate({"top": "-22px"}, 200);
        $(".top_right13").css("transform", "rotate(180deg)");
        $(".top_right14").css({"display": "block", "z-index": "3"});
        $(this).css("background", "white");
    }, function () {
        $('.r11').animate({'top': '0px'}, 200);
        $(".top_right13").css("transform", "rotate(0deg)");
        $('.top_right14').css('display', 'none');
        $(this).css('background', '#F7F7F7');
    });
// 顶部客户服务//
    $(".top_right2").hover(function () {
        $(".r212").css("transform", "rotate(180deg)");
        $(".r213").css({"display": "block", "z-index": "3"});
        $(this).css("background", "white");
    }, function () {
        $(".r212").css("transform", "rotate(0deg)");
        $('.r213').css('display', 'none');
        $(this).css('background', '#F7F7F7');
    });
    // 顶部网站导航//
    $(".top_right3").hover(function () {
        $(".top_right32").css("transform", "rotate(180deg)");
        $(".top_right33").css({"display": "block", "z-index": "3"});
        $(this).css("background", "white");
    }, function () {
        $(".top_right32").css("transform", "rotate(0deg)");
        $('.top_right33').css('display', 'none');
        $(this).css('background', '#F7F7F7');
    });
    // 购物车//
    $(".shop").hover(function(){
        $(".shop3").css({"display":"block","z-index":"1"});
        $(this).css({"background":"white","border":"1px solid #ddd","z-index":"2"});
        $(".shop1").css("display","none");
        $(".shop11").css("display","block");
    },function(){
        $('.shop3').css('display','none');
        $(this).css('background','#F7F7F7');
        $('.shop1').css('display','block');
        $('.shop11').css('display','none');
    });
    // 大块左侧//
    $(".main .left .leftul li").hover(function(){
        $(this).not(".main .left .lilyx li").css({"background-color":"white","border-left":"1px solid #c50000"});
        $(this).find(".bjcj a").css({"color":"#c50000"});
        $(this).find(".lisd").css('display','none');
        $(this).find(".lilyx").css({"display":"block","z-index":"9"});
        $(this).find('.bjcj').css({'border-right':'0px'});
        $(this).find('.bjcj').css('z-index','19');
    },function(){
        $(this).not(".main .left .lilyx li").css({"background-color":"#db0000","border":"0px"});
        $(this).find(".bjcj a").css({"color":"white"});
        $(this).find(".lisd").css("display","block");
        $(this).find(".lilyx").css({"display":"none","z-index":"0"})
        $(this).find('.bjcj').css('z-index','0');
    });
    // 轮播屯区域
    var i=0;
    timer=setInterval(run,3000);
    function run(){
        i++;
        if(i==6){
            i=0;
        }
        $('.main .mid_banner img').eq(i).fadeIn(800).show().siblings('img').hide();
        $('.main .mid_banner ul li').eq(i).css({'background':'#c50000'}).siblings('li').css({'background':' #878787'});
    }
    $('.main .mid_banner ul li').mouseover(function(){
        clearInterval(timer);
        var c=$(this).index();
        i=c;
        $('.main .mid_banner img').eq(i).fadeIn(800).show().siblings('img').hide();
        $('.main .mid_banner li').eq(i).css({'background':'#c50000'}).siblings('li').css({'background':' #878787'})
    });

    $('.banner1_right').click(function(){

        i++;
        if(i==6){
            i=0;
        }

        $('.main .mid_banner img').eq(i).fadeIn(800).show().siblings('img').hide();
        $('.main .mid_banner ul li').eq(i).css({'background':'#c50000'}).siblings('li').css({'background':' #878787'});

    });
    //var b=0;
    $('.banner1_left').click(function(){

        i--;
        if(i==-1){
            i=6;
        }

        $('.main .mid_banner img').eq(i).fadeIn(800).show().siblings('img').hide();
        $('.main .mid_banner ul li').eq(i).css({'background':'#c50000'}).siblings('li').css({'background':' #878787'});


    });

    $('.main .mid_banner ul li').mouseout(function(){
        timer=setInterval(run,3000);
    });
    // 轮播图结束
//tab1
    $('.yc1s').mouseover(function(){
        var m=$(this).index();
        //alert(m)
        $(this).parent().next().find('.zhaowo').eq(m).css({'display':'block'}).siblings('.zhaowo').css({'display':'none'});
        $(this).css({"border-bottom":"0px","border-top":"2px solid  #c50000"}).siblings().css({"border-bottom":" 1px solid #DDDDDD","border-top":"1px solid #DDDDDD"});
        $(this).find("a").css("color","#c50000").parent().siblings().find("a").css("color","#666666")

    });
    $(".zhaowo1").mouseover(function(){
        var l=$(this).index();
        // alert(l);
        $(this).parent().next().find('.zhaowo2').eq(l).css('display','block').siblings('.zhaowo2').css('display','none');
        $(this).css({"background-color":"#c50000"}).find("a").css("color","white").parent().siblings().css({"background-color":"white"}).find("a").css("color","#666666")
    });
    $(".rqxuanze2").val("6");
    $(".rqxuanze3").val("14");


    $('.main .right .right_end .end ').mouseover(function(){
        $(".xhao").css("display","block");
        $('.fw').animate({'top':'-260px'},200);

    });

    $('.xhao').click(function(){
        $('.fw').animate({'top':'0px'},50);
        $(this).css("display","none");
        $(".main .right .right_end .end").off("mouseover")
    });
    $('.main .right .right_end .end ').mouseleave(function(){

        $(".main .right .right_end .end").on("mouseover",function(){
            $(".xhao").css("display","block");
            $('.fw').animate({'top':'-260px'},200);
        });
    });

// banner1
    $(".mid_banner").hover(function(){
            $(".banner1_right").css("display","block");
            $(".banner1_left").css("display","block");
        },function(){
            $(".banner1_right").css("display","none");
            $(".banner1_left").css("display","none");
        }
    );


    // banner2
    $(".banner2_lb").hover(function(){

            $(".banner_right").css("display","block");
            $(".banner_left").css("display","block");
        },function(){
            $(".banner_right").css("display","none");
            $(".banner_left").css("display","none");
        }
    );
    c=0;
    $('.banner_right').click(function(){
        c++;
        if(c==1){
            c=-4;
        }
        var m= 251*c;

        $('.long').stop().animate({'left':m+'px'},200);

    })
    $('.banner_left').click(function(){
        c--;
        if(c==-4){
            c=0;
        }
        var m= 251*c;
        // document.title(m)
        $('.long').stop().animate({'left':m+'px'},200);

    });
    $(".content_middle").hover(function(){
        $(this).find("img").css({"top":"-10px"})
    },function(){
        $(this).find("img").css({"top":"0"})
    });

//tab2//
    $(".tab1_item").mouseover(function(){
        var m=$(this).index();
        //alert(m)
        $('.mobile1_main').eq(m).css({'display':'block'}).siblings('.mobile1_main').css({'display':'none'});
        $(this).css({"border-bottom":"0px","border-top":"3px solid  #c50000","border-left":"1px solid  #c50000","border-right":"1px solid  #c50000"}).siblings().css({"border":"0","border-right":"1px solid #ddd"})
        $(".tab_last").css({"border-right":"0"});
        $(this).find("a").css("color","#c50000").parent().siblings().find("a").css("color","#666666")

    });
    $(".tab1_last").mouseover(function(){
    $(this).css("border-right","1px solid  #c50000")
    });
    $(".tab2_item").mouseover(function(){
        var m=$(this).index();
        //alert(m)
        $('.home_main').eq(m).css({'display':'block'}).siblings('.home_main').css({'display':'none'});
        $(this).css({"border-bottom":"0px","border-top":"3px solid  #c50000","border-left":"1px solid  #c50000","border-right":"1px solid  #c50000"}).siblings().css({"border":"0","border-right":"1px solid #ddd"})
        $(".tab2_last").css({"border-right":"0"});
        $(this).find("a").css("color","#c50000").parent().siblings().find("a").css("color","#666666")

    });
    $(".tab2_last").mouseover(function(){
        $(this).css("border-right","1px solid  #c50000")
    });
    //banner3
    $(".swiper-container").hover(function(){

            $(".swiper-button-prev").css("display","block");
            $(".swiper-button-next").css("display","block");
        },function(){
            $(".swiper-button-prev").css("display","none");
            $(".swiper-button-next").css("display","none");
        }
    );
    //var s=0;var q=0;
    //timer2=setInterval(slide,3000);
    //function slide() {
    //    s--;
    //    if (s == -4) {
    //        s = 0;
    //    }
    //    var n= 439*s;
    //    q++;
    //    if(q == 4){
    //        q = 0;
    //    }
    //    $('.banner3').animate({'left':n+'px'},200);
    //    $('.dian1>li').eq(q).css({'background':'#c50000'}).siblings('li').css({'background':' #939393'})
    //
    //}
    //$('.mbanner_right').click(function(){
    //    s--;
    //    if (s == -4) {
    //        s = 0;
    //    }
    //    var n= 439*s;
    //    q++;
    //    if(q == 4){
    //        q = 0;
    //    }
    //    $('.banner3').animate({'left':n+'px'},200);
    //    $('.dian li').eq(q).css({'background':'#c50000'}).siblings('li').css({'background':' #939393'});
    //
    //});
    //$('.mbanner_left').click(function(){
    //    //clearInterval(timer2);
    //    s++;
    //    if (s == 1) {
    //        s = -3;
    //    }
    //    var n= 439*s;
    //    q--;
    //    if(q == -1){
    //        q = 3;
    //    }
    //    $('.banner3').animate({'left':n+'px'},200);
    //    $('.dian li').eq(q).css({'background':'#c50000'}).siblings('li').css({'background':' #939393'});
    //    //timer2=setInterval(slide,3000);
    //});
    //$(".banner3").hover(function(){
    //    clearInterval(timer2);
    //},function(){
    //    timer2=setInterval(slide,3000)
    //})
    //$('.dian li').mouseover(function(){
    //    clearInterval(timer2);
    //    var s=$(this).index();
    //    var n= -439*s;
    //    $('.banner3').animate({'left':n+'px'},200);
    //    $(this).eq(s).css({'background':'#c50000'}).siblings('li').css({'background':' #939393'})
    //});
    //$(".main_banner").hover(function(){
    //   $(".mbanner_left").css("display","block");
    //    $(".mbanner_right").css("display","block");
    //},function(){
    //    $(".mbanner_left").css("display","none");
    //    $(".mbanner_right").css("display","none");
    //});
    //$('.dian li').mouseout(function(){
    //    timer2=setInterval(slide,3000);
    //});

    //左侧导航
    $(window).bind('scroll', function(){
        if ($(window).scrollTop() <1000 ) {
            $('.lnav').hide();
        }else if($(window).scrollTop()>1000&&$(window).scrollTop()<1700 ){
            $(".lnav ul li:eq(0)").find("a").eq(0).css("display","none").siblings("a").css("display","block");
            $(".lnav ul li:eq(1)").find("a").eq(0).css("display","block").siblings("a").css("display","none");
            $('.lnav').show();
        }else if($(window).scrollTop()>1700&&$(window).scrollTop()<2150){
            $(".lnav ul li:eq(0)").find("a").eq(0).css("display","block").siblings("a").css("display","none");
            $(".lnav ul li:eq(1)").find("a").eq(0).css("display","none").siblings("a").css("display","block");
            $('.lnav').show();
        }
        else{
            $('.lnav').hide();
        }

    });
   //导航点击跳转
    $('.first,.second').click(function(){
        var cl = $(this).attr('class');
        $('html,body').animate({scrollTop: $('.'+cl+'_content').offset().top}, 1000);
    })


})


