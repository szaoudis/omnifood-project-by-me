/* global $ */



/* eslint-env jquery */

$('document').ready(function() {
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
    
    /* Scroll Buttons */
    
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    }) 
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    /* Navigation Scroll */
    
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },
        1000,
        'linear'
        )
    });
    
});


