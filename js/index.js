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


    /* section 2. how to */
    //btn_group_m
    let i=0;
    console.log(i);
    $('.btn_group_m .next').click(function(){
        ++i;
        if(i<=0){i=0}else if(i>=6){i=5};
        console.log(i);
        $('.how_to_slide_contents .swiper-container .swiper-wrapper').stop().animate({marginLeft:-100*i+'%'},400);
        $('.indicator li').removeClass('active');
        $('.indicator li').eq(i).addClass('active');
        $('.description li').removeClass('active');
        $('.description li').eq(i).addClass('active');
        
    });
    $('.btn_group_m .prev').click(function(){
       --i;
       console.log(i);
       if(i<1){i=0}else if(i>=6){i=5};
       $('.how_to_slide_contents .swiper-container .swiper-wrapper').stop().animate({marginLeft:-100*i+'%'},400);
       $('.indicator li').removeClass('active');
       $('.indicator li').eq(i).addClass('active');
       $('.description li').removeClass('active');
        $('.description li').eq(i).addClass('active');
    });

    //indicator
    $('.indicator li').click(function(){
        num = $(this).index();
        $('.how_to_slide_contents .swiper-container .swiper-wrapper').stop().animate({marginLeft:-100*num+'%'},400);
        $('.indicator li').removeClass('active');
        $(this).addClass('active');
        $('.description li').removeClass('active');
        $('.description li').eq(num).addClass('active');
        i = num;
    });



    /* section 3. caution */
    $('#main #caution .caution_icon .btn_group_m a.caution_btn1').click(function(){
        $('#main #caution .caution_icon .btn_group_m a').removeClass('active');
        $(this).addClass('active');
        $('#main #caution .caution_icon ul').css('display','none')
        $('#main #caution .caution_icon .before').css('display','flex')
    });
    $('#main #caution .caution_icon .btn_group_m a.caution_btn2').click(function(){
        $('#main #caution .caution_icon .btn_group_m a').removeClass('active');
        $(this).addClass('active');
        $('#main #caution .caution_icon ul').css('display','none');
        $('#main #caution .caution_icon .riding').css('display','flex');
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