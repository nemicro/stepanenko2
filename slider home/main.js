;(function ($) {
    $(function () {
        $('.slider').slick({
            slidesToShow:3,
            autoplay:true,
            autoplaySpeed:1000,
            prevArrow: $('.prev-button'),
            nextArrow: $('.next-button')
        });
    });
})(jQuery);