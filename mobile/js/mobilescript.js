/**
 * Created by bh on 2016/2/5.
 */

  window.onload = function() {
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");

    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];

    audio.addEventListener("ended", function () {
        music.setAttribute("class", "")
    }, false);


    music.addEventListener("touchstart", function () {
        if (audio.paused) {
            audio.play();
            this.setAttributes("class", "play");
            //    this.style.animationPlayState= "running";
            //    this.style.webkitanimationPlayState= "running";
        }
        else {
            audio.pause();
            this.setAttribute("class", "");
            //this.style.animationPlayState= "paused";
            //this.style.webkitanimationPlayState= "paused";
        }
    }, false);

//µã»÷ÆÁÄ»//
    page1.addEventListener("touchstart", function () {
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display = "block";
        page3.style.top = "100%";
        setTimeout(function () {
            page2.setAttribute("class", "page fadeout");
            page3.setAttribute("class", "page fadein");
        }, 5500);
    }, false);
};


