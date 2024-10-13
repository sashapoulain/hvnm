



$('.global-carousel').each(function () {
    $(this).owlCarousel({
        nav: eval($(this).data('nav')),
        dots: eval($(this).data('dots')),
        loop: eval($(this).data('loop')),
        margin: $(this).data('margin'),
        center: eval($(this).data('center')),
        dotsSpeed: $(this).data('speed'),
        autoplay: eval($(this).data('autoplay')),
        transitionStyle: $(this).data('transition'),
        animateOut: $(this).data('animate-out'),
        animateIn: $(this).data('animate-in'),
        autoplayTimeout: $(this).attr('data-timeout'),
        autoWidth: eval($(this).attr('data-autowidth')),
        autoHeight: eval($(this).attr('data-autoheight')),
        stagePadding: eval($(this).attr('data-stage-padding')),
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: $(this).data('slide-sm'),
                stagePadding: 20,
            },
            600: {
                items: $(this).data('slide-md'),
                stagePadding: 20,
            },
            1000: {
                items: $(this).data('slide')
            }
        }
    });
    $('.owl-carousel__next').click(() =>
        $(this).trigger('next.owl.carousel')
    );


    $('.owl-carousel__prev').click(() =>
        $(this).trigger('prev.owl.carousel')
    );

});

// var owlCarouselActive = document.querySelectorAll('.owl-carousel.similar .owl-item.active');
// if (owlCarouselActive.length > 0) {
//     var first = owlCarouselActive[0]; 

//     first.style.opacity = 0.4; 
// }




document.addEventListener('DOMContentLoaded', function () {
    var myModal = new bootstrap.Modal(document.getElementById('noticeModal'), {
        backdrop: true
    });
    if(myModal){
        myModal.show();
    }
});

$(document).ready(function () {
    $('.decrease').click(function () {
        let input = $(this).siblings('.quantity');
        let currentValue = parseInt(input.val());
        if (currentValue > 1) {
            input.val(currentValue - 1);
        }
    });

    $('.increase').click(function () {
        let input = $(this).siblings('.quantity');
        let currentValue = parseInt(input.val());
        input.val(currentValue + 1);
    });
});

