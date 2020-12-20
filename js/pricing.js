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

    // 모바일 헤더 스크롤시 색상 변화
    // $(window).scroll(function(){
    //     let scroll = $(window).scrollTop();
    //     if (scroll > 50) {
    //         $('header').addClass('scroll');

    //     } else {
    //         $('.btn-menu').click(function(){
    //             $('.logo svg g').addClass('Down');
    //         });
    //         $('.btn-menu-close').click(function(){
    //             $('.logo svg g').removeClass('Down');
    //         });
    //         $('header').removeClass('scroll');
    //     }
    // });

});