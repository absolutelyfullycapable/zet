  $(document).ready(function(){

    $('a[href="#"]').click(function(e){
        e.preventDefault();
    });

    //nav 버튼 변경, 배경색
    $('.btn-menu').click(function(){
        $('.btn-menu').css('display','none');
        $('.btn-menu-close').css('display','block');
        $('.nav_bg').css('display','block');
        $('html').css('overflow', 'hidden');
        $('.navbar').addClass('click');
        $('.navbar-default .navbar-brand svg .fill').addClass('click');
    });
    $('.btn-menu-close').click(function(){
        $('.btn-menu-close').css('display','none');
        $('.btn-menu').css('display','block');
        $('.nav_bg').css('display','none');
        $('html').css('overflow', 'initial');
        $('.navbar').removeClass('click');
        $('.navbar-default .navbar-brand svg .fill').removeClass('click');
    });

    //scroll 스크롤 이벤트 - nav 배경색 변경
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        if(scroll > 90) {
            $('.navbar').addClass('scroll');
        } else {
            $('.navbar').removeClass('scroll');
        }
    });

});