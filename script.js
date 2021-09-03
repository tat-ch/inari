$(document).ready(function () {
    // слайдер баннеров 

    $('.banners_slider').slick({
        slidesToShow: 1,
        adaptiveHeight: true,
        puseOnHover: true,
        variableWidth: true,
        centerMode: true
    });

    // всплывающее окошечко при наведении на кнопку корзины

    $('.cabinet_cart-btn').hover(function () {

        // тайм-аут перед скрытием окошка при наведении

        setTimeout(() => {
            $('.shop-cart').show(200);
        }, 500);

        // блокировка скрытия при наведении

        }, function () {

            let a = 0; // переменная для проверки, навели ли мы курсор на окошко
                $('.shop-cart').hover(function () {
                a = 1;  // если навели, увеличиваем её на 1
            }, function () {
                $('.shop-cart').hide(200); // если навели и убрали, то скрываем без тайм-аута
            }
        );
            setTimeout(() => {
                if (a == 0) {                   // если не наводили курсор на окошко, то скрываем с тайм-аутом
                    $('.shop-cart').hide(200);
                }
            }, 700);
        }
    );
    
    // активация кнопки адаптивного меню

    $('.navbar_button').click(function (e) {
        $('.navbar_decorate, .navbar_button,.navbar').toggleClass('active_adaptive');
        $('body').toggleClass('lock');
    });
});

// всплывающая табличка энергетической ценности в модальном окне

$('#confirm-window').mouseup(function (e) {
    table = $('.modal-popper');
    btn = $('.modal-popper_icon');
    if (btn.is(e.target) === true) {
        table.toggleClass('active');
    } else if (!table.is(e.target) && table.has(e.target).length === 0) {
        table.removeClass('active');
    }
});