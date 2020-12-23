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
        var inx = $(this).parents('li').index();
        
        $(this).parents('li').toggleClass('on');
        $('.faq-box').stop().slideUp();
        $(this).next('.faq-box').stop().slideDown();
        $('.support-faq-img').find('li').eq(inx).addClass('on').siblings().removeClass('on');

        if($(this).parents('li').hasClass('on')) {
            $(this).parents('li').siblings().removeClass('on');
            $(this).on('click', function() {
                $(this).next('.faq-box').stop().slideUp();
                $(this).parents('li').removeClass('on');
                $('.support-faq-img').find('li').eq(inx).removeClass('on');
            });
        } else {
            $(this).on('click', function() {
                $(this).next('.faq-box').stop().slideDown();
                $(this).parents('li').addClass('on');
                $('.support-faq-img').find('li').eq(inx).addClass('on');
            });
        }
    });
});