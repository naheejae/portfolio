$(function(){
    $(".arrow_rt2, .arrow_lt2").hide()
    $(".main li").mouseover(function(){
        $(this).addClass("on")
        $(this).siblings().removeClass("on")
    })// 마우스 오버 펑션
    $("body").quietflow({
        theme : "bouncingBalls",
        specificColors : [
          "rgba(255, 10, 50, .5)",
          "rgba(254, 233, 96)", 
          "rgba(184, 110, 173)", 
        ],
        backgroundCol : "#FFF",
      })
var now  = 0 // 0 -> 1 -> 2
var time = setInterval(move, 3500)
    function move(){
        if(now < 3) {
            $(".view_wrap > div").eq(now).stop().fadeOut()
            now++
            $(".view_wrap > div").eq(now).stop().fadeIn()
        }else {
            $(".view_wrap > div").eq(now).stop().fadeOut()
            now=0
            $(".view_wrap > div").eq(now).stop().fadeIn()
        }
    }//이미지슬라이드 애니메이션

    $(".view_wrap > div , .arrow_rt > img , .arrow_lt > img").hover(function(){
        clearInterval(time)
    }, function(){
        time = setInterval(move, 3500)
    })//호버되면 멈춤


    $(".css_port > .arrow_rt ").click(function(){
        move()
    })
    $(".css_port > .arrow_lt").click(function(){
        if(now > 0) {
            $(".view_wrap > div").eq(now).fadeOut()
            now--
            $(".view_wrap > div").eq(now).fadeIn()
        }else {
            $(".view_wrap > div").eq(now).fadeOut()
            now=3
            $(".view_wrap > div").eq(now).fadeIn()
        }
    })

    $(".btn_1").click(function(){
        $(".design, .arrow_rt2, .arrow_lt2").hide()
        $(".view_wrap, .arrow_rt, .arrow_lt").show()
    })
    $(".btn_2").click(function(){
        $(".design, .arrow_rt2, .arrow_lt2").show()
        $(".view_wrap, .arrow_rt, .arrow_lt").hide()
        var now2 = 0
        var time2 = setInterval(move2, 3500)
    function move2(){
        if(now2 < 2) {
            $(".design > div").eq(now2).stop().fadeOut()
            now2++
            $(".design > div").eq(now2).stop().fadeIn()
        }else {
            $(".design > div").eq(now2).stop().fadeOut()
            now2=0
            $(".design > div").eq(now2).stop().fadeIn()
        }
    }//디자인 영역 이미지슬라이드 애니메이션
    $(".design > div , .arrow_rt2 > img , .arrow_lt2 > img").hover(function(){
        clearInterval(time2)
    }, function(){
        time2 = setInterval(move2, 3500)
    })//디자인 영역 호버되면 멈춤

    $(".arrow_rt2").click(function(){
        move2()
    })
    $(".arrow_lt2").click(function(){
        if(now2 > 0) {
            $(".design > div").eq(now2).fadeOut()
            now2--
            $(".design > div").eq(now2).fadeIn()
        }else {
            $(".design > div").eq(now2).fadeOut()
            now2=2
            $(".design > div").eq(now2).fadeIn()
        }
    })


    })

})//메인쿼리