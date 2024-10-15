

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
        },
        navText: [
            '<i class="fa-solid fa-arrow-left-long"></i>',
            '<i class="fa-solid fa-arrow-right-long"></i>'
        ]
    });
    // $('.owl-carousel__next').click(() =>
    //     $(this).trigger('next.owl.carousel')
    // );


    // $('.owl-carousel__prev').click(() =>
    //     $(this).trigger('prev.owl.carousel')
    // );

});



// document.addEventListener('DOMContentLoaded', function () {
//     if (document.getElementById('noticeModal')) {
//         var myModal = new bootstrap.Modal(document.getElementById('noticeModal'), {
//             backdrop: true
//         });
//         myModal.show(); // Modalı göster
//     }
// });

// $(document).ready(function () {
//     $('.decrease').click(function () {
//         let input = $(this).siblings('.quantity');
//         let currentValue = parseInt(input.val());
//         if (currentValue > 1) {
//             input.val(currentValue - 1);
//         }
//     });

//     $('.increase').click(function () {
//         let input = $(this).siblings('.quantity');
//         let currentValue = parseInt(input.val());
//         input.val(currentValue + 1);
//     });
// });

// const checkboxes = document.querySelectorAll('.form-check-input');
// const totalPriceElement = document.getElementById('totalPrice');
// let basePrice = 599.99;
// let totalPrice = basePrice;

// const updatePrice = () => {
//     totalPrice = basePrice;

//     checkboxes.forEach(checkbox => {
//         if (checkbox.checked) {
//             totalPrice += parseFloat(checkbox.value);
//         }
//     });

//     animatePriceChange(totalPrice);
// };

// const animatePriceChange = (newPrice) => {
//     const duration = 1000;
//     const startPrice = parseFloat(totalPriceElement.innerText);
//     const endPrice = newPrice;
//     const startTime = performance.now();

//     const animate = (currentTime) => {
//         const elapsed = currentTime - startTime;
//         const progress = Math.min(elapsed / duration, 1);

//         const currentPrice = startPrice + (endPrice - startPrice) * progress;
//         totalPriceElement.innerText = currentPrice.toFixed(2);

//         if (progress < 1) {
//             requestAnimationFrame(animate);
//         }
//     };

//     requestAnimationFrame(animate);
// };

// checkboxes.forEach(checkbox => {
//     checkbox.addEventListener('change', updatePrice);
// });




/*price timeline*/

// document.addEventListener('DOMContentLoaded', () => {
//     $('.decrease').click(function () {
//         let input = $(this).siblings('.quantity');
//         let currentValue = parseInt(input.val());
//         if (currentValue > 1) {
//             input.val(currentValue - 1);
//             updatePrice(); 
//         }
//     });

//     $('.increase').click(function () {
//         let input = $(this).siblings('.quantity');
//         let currentValue = parseInt(input.val());
//         input.val(currentValue + 1);
//         updatePrice(); 
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    const basePriceElement = document.getElementById('totalPrice');
    
    if (!basePriceElement) {
        return; 
    }

    let basePrice = parseFloat(basePriceElement.innerText.replace('₺ ', '').replace('.', '').replace(',', '.'));
    let totalPrice = basePrice;

    const checkboxes = document.querySelectorAll('.form-check-input');
    const totalPriceElement = document.getElementById('totalPrice');

    const updatePrice = () => {
        totalPrice = basePrice;

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                totalPrice += parseFloat(checkbox.value);
            }
        });

        animatePriceChange(totalPrice);
    };

    const animatePriceChange = (newPrice) => {
        const duration = 1000; 
        const startPrice = parseFloat(totalPriceElement.innerText.replace('₺ ', '').replace('.', '').replace(',', '.'));
        const endPrice = newPrice;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const currentPrice = startPrice + (endPrice - startPrice) * progress;
            totalPriceElement.innerText = currentPrice.toFixed(2).replace('.', ','); 

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    };

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updatePrice);
    });
});
