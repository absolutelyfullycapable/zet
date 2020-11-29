  $(document).ready(function(){

    $('a[href="#"]').click(function(e){
                        e.preventDefault();
                       });

        //nav 버튼 변경, 배경색
    $('.btn-menu').click(function(){
        $('.btn-menu').css('display','none');
        $('.btn-menu-close').css('display','block');
        $('.nav_bg').css('display','block');
    });
    $('.btn-menu-close').click(function(){
        $('.btn-menu-close').css('display','none');
        $('.btn-menu').css('display','block');
        $('.nav_bg').css('display','none');
    });


    //howto.화살표
    $('.btn_group_m .next').click(function(){

        $('.how_to_slide_contents .swiper-container .swiper-wrapper').stop().animate({marginLeft:-100*num+'%'},400)
    });
    $('.btn_group_m .prev').click(function(){

        $('.how_to_slide_contents .swiper-container .swiper-wrapper').stop().animate({marginLeft:100*num+'%'},400)
    });

    //indicator
    $('.indicator li').click(function(){
        let num = $(this).index();
        let img_wd = $('.swiper-wrapper .swiper-slide img').width()
        $('.how_to_slide_contents .swiper-container .swiper-wrapper').stop().animate({marginLeft:-100*num+'%'},400)
        $('.indicator li').removeClass('active');
        $(this).addClass('active');
    });





    //location map

    var btn_daejeon = $('#main #location .btn_group .btn_daejeon');
    var btn_jeju = $('#main #location .btn_group .btn_jeju');
    var map_daejeon = $('#main #location .map .daejeon');
    var map_jeju = $('#main #location .map .jeju');
    $(btn_daejeon).click(function(){
        $(btn_jeju).removeClass('active');
        $(map_jeju).removeClass('active');
        $(btn_daejeon).addClass('active');
        $(map_daejeon).addClass('active');
    });
    $(btn_jeju).click(function(){
        $(btn_daejeon).removeClass('active');
        $(map_daejeon).removeClass('active');
        $(btn_jeju).addClass('active');
        $(map_jeju).addClass('active');
    });
    $(map_daejeon).children('a').click(function(){
        $(btn_jeju).removeClass('active');
        $(map_jeju).removeClass('active');
        $(btn_daejeon).addClass('active');
        $(map_daejeon).addClass('active');
    });
    $(map_jeju).children('a').click(function(){
        $(btn_daejeon).removeClass('active');
        $(map_daejeon).removeClass('active');
        $(btn_jeju).addClass('active');
        $(map_jeju).addClass('active');
    });

});


// $(window).resize(function(){
//     let wid = $(window).width();
//     if (wid < 1024) {
//     };
// });