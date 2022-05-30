$('a[href*="#"]').click(function () {
    $('html, body').animate({
        scrollTop: $($.attr(this,'href')).offset().top -50  // класс объекта к которому приезжаем
    }, 500);
});
$('.burger-icon')&&$('.burger-icon__svg').on('click', function () {
    // this.console.log('клик');
    $('.burger-menu-block').addClass("burger-menu-block-open");
});

AOS.init({
    delay: 100,
    duration: 400,
    once: true,
})