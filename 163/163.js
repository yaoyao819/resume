/**
 * Created by bhan on 2016/3/22.
 */
$(function(){
    var i=0;
    function bs(){
        if(i==0) {
            $(".mid").css({"background-color": "rgb(227, 226, 235)"})
        }
        if(i==1) {
            $(".mid").css({"background-color": "rgb(202, 62, 13)"})
        }
        if(i==2) {
            $(".mid").css({"background-color": "rgb(84, 94, 254)"})
        }
    }
    $(".next").click(function(){

        i++;
        if(i==3){
            i=0
        }
        $(".main .lunbo img").eq(i).fadeIn(200).show().siblings("img").hide();
        bs()
    });

    $(".prev").click(function(){
        i--;
        if(i==-1){
            i=2
        };
        $(".main .lunbo img").eq(i).fadeIn(200).show().siblings("img").hide();
       bs()
    });

    $(".app1").hover(function(){

        $(".app1").stop().animate({"left":"20px"},200);
        $(".app2").stop().fadeIn().show()
    },function(){
        $(".app1").stop().animate({"left":"70px"},200);
        $(".app2").stop().fadeIn().hide()
    })
    $(".zhaowo").mouseover(function(){
        var m =$(this).index(0);
       tio=setTimeout(function (){
            $(".zhaowo2").eq(m).css({"display":"block"}).siblings(".zhaowo2").css({"display":"none"})
           $(".zhaowo").eq(m).css({"border-bottom":"0px"}).siblings(".zhaowo").css({"border-bottom":"1px solid #dddddd"})
        },500);

    })
    $(".zhaowo").mouseout(function() {
        clearTimeout(tio)
    })
    $("#idinput").bind("input propertychange",function(){
       $(".lableid").hide()
        if($("#idinput[type=text]").val()==""){
            $(".lableid").show()
        }
    })
    $("#passinput").bind("input propertychange",function(){
        $(".lablepass").hide()
        if($("#passinput[type=password]").val()==""){
            $(".lablepass").show()
        }
    })


    $("input").focus(function() {
        $(this).parent().css("border","1.5px solid #74b8d5");
    }).blur(function() {
        $(this).parent().css("border","1.5px solid #ababab");

    })


    $(".checkicon").toggle(function(){
        $(".checkicon").css("background-position","-40px -179px")
    },function(){
            $(".checkicon").css("background-position","-40px -160px")
        }
    )


    function autoh() {
        var wh = $(window).height();
        var wh2= (wh-729)/2;
        if (wh > 729) {
        $("body").css("padding-top",wh2+"px")
        }else{
            $("body").css("padding-top","0")
        }
    }
    autoh();
    $(window).resize(function(){
        autoh()
    })

});