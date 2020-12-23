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
    $('.faq-board a').on('click',function(){
        var inx = $(this).parents('li').index();

        $(this).parents('li').addClass('on').siblings().removeClass('on');
        if($(this).parents('li').is(':visible')){
            $(this).next().slideUp();
            $('.support-faq-img').find('li').removeClass('on');
        }
        $('.faq-list p').slideUp();
        $(this).next().slideDown();
        $('.support-faq-img').find('li').eq(inx).addClass('on').siblings().removeClass('on');
    });
});