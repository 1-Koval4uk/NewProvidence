//Appearance animation
new WOW().init();


//Navigation scroll
$(window).scroll(function(){
    let wScroll = $(this).scrollTop();
    if (wScroll > 20) {
        $('.navigation').addClass('navigation-active');
    }
    else {
        $('.navigation').removeClass('navigation-active');
    };
});


$('.nav-list__hamburger').click(function(){
    $('.left-side').removeClass('non-active')
})


$('.left-side__close').click(function () {
    $('.left-side').addClass('non-active')
});

$(window).on('scroll', function(){
    if($(window).scrollTop() >= 1000){
        $('.btn-top').fadeIn();
    }else{
        $('.btn-top').fadeOut();
    }
})
$('.btn-top').click(function(){
    $('html, body').animate({scrollTop:0}, 800)
})
