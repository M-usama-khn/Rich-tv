// Header Scroll JS Start
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    if (header && window.scrollY >= 50) {
        header.classList.add('scroll');
    } else if (header) {
        header.classList.remove('scroll');
    }
});
// Header Scroll JS end
// slick slider js
$(document).ready(function () {
    $('.video-slider, .testimonial-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: true,
        autoplay: true,
        slidesToShow: 3,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                swipeToSlide: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                swipeToSlide: true,
            }
        }
        ]
    });
    $('.guide-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: true,
        autoplay: true,
        slidesToShow: 2,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                swipeToSlide: true,
            }
        }
        ]
    });
});
var slider = $('.hero-stock-slider');
var autoplaySpeed = 13000; // Set the appropriate autoplay speed
var hoverTimeout;

slider.slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: autoplaySpeed,
    speed: 13000,
    pauseOnHover: true,
    cssEase: 'linear',
    dots: false,
    infinite: true,
    adaptiveHeight: true,
    arrows: false,
}).on('mouseenter', function(){
    clearTimeout(hoverTimeout);
    slider.slick('slickPause');
}).on('mouseleave', function(){
    hoverTimeout = setTimeout(function() {
        slider.slick('slickPlay');
    }, autoplaySpeed);
});

// slick slider js end
// DISCLAIMER js 
$(".show-more").click(function () {
    $(".slide-up-down p").slideToggle();
    $(this).hide();
});
$(".show-less").click(function () {
    $(".slide-up-down p").slideToggle();
    setTimeout(function () {
        $(".show-more").show();
    }, 500);
});
// DISCLAIMER js End