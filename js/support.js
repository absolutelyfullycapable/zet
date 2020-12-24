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
    });
    $('.btn-menu-close').click(function(){
        $('.btn-menu-close').css('display','none');
        $('.btn-menu').css('display','block');
        $('.nav_bg').css('display','none');
        $('html').css('overflow', 'initial');
    });

    //accodian menu
    $('.faq-box').hide();

    $('.faq-list a').on('click', function() {
        var inx = $(this).parents('li').index(),
            style = $(this).parents('li').hasClass('on');

        if(style == false) {//닫힌 상태인 리스트 클릭
            $('.faq-list a').parents('li').removeClass('on');
            $(this).parents('li').addClass('on');
            $('.faq-box').stop().slideUp();
            $(this).siblings('.faq-box').stop().slideDown();
            $('.support-faq-img').find('li').eq(inx).addClass('on').siblings().removeClass('on');
        } else {//열린 상태인 리스트 클릭
            $(this).parents('li').removeClass('on');
            $('.faq-box').stop().slideUp();
            $('.support-faq-img').find('li').eq(inx).removeClass('on');
        }
    });
});