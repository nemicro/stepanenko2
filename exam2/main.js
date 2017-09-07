;(function ($) {
    $(function () {
        $('.team-slider, .testimonials-slider').slick({
            arrows: false,
            dots: true,
            dotsClass: "team-slider-dots",
            autoPlay: true
        });
    });
    $(function () {
        var map,
            point = {lat: 48.734326, lng: 37.579426};
        map = new google.maps.Map(document.getElementById('googleMap'), {
            center: point,
            zoom: 15
        });
        var img = new google.maps.MarkerImage('marker.png');
        var marker = new google.maps.Marker({
            position: point,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: img
        });

    });
    $('.iso-main-in-portfolio').isotope({
        itemSelector: '.item'
    });
    $('.iso-nav-in-portfolio div').click(function () {
        $('.iso-nav-in-portfolio div').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $('.iso-main-in-portfolio').isotope({
            filter: selector
        });

    });
    $('.menu').on('click','a', function () {
       event.preventDefault();
       var id = $(this).attr('href'),
           top = $(id).offset().top;
       $('body,html').animate({scrollTop:top}, 500)
    });
    $('.scroll-button-in-header').on('click','a', function () {
       event.preventDefault();
       var id = $(this).attr('href'),
           top = $(id).offset().top;
       $('body,html').animate({scrollTop:top}, 500)
    });
    $('.menu-button1').click(function () {
        $('body').append('<audio autoplay controls  src="sound/adel_-_hello_(zf.fm).mp3"></audio>')

    });

    })(jQuery);