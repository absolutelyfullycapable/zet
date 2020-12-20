 $(document).ready(function(){
    //accodian menu
    $('.faq-board').find('a').on('click',function(){
        var inx= $(this).parents('li').index();
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