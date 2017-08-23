;(function ($) {
    $(function () {
        $('.team-slider, .testimonials-slider').slick({
            arrows:false,
            dots:true,
            dotsClass:"team-slider-dots",
            autoplay:true,
            autoplaySpeed:2000
        });
    });
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        getSortData: {
            AllWorks: '[data-AllWorks]',
            Print: '[data-Print]',
            Branding: '[data-Branding]',
            Web: '[data-Web]'
        }
    });


    $('#sorts').on( 'click', 'button', function() {
        var sortByValue = $(this).attr('data-sort-by');
        $grid.isotope({
            sortBy: sortByValue,
            sortAscending:false
        });
    });
})(jQuery);