$(document).ready(function () {

    // активация кнопки адаптивного меню 
    
    $('.navbar_button').click(function (e) {
        $('.navbar_decorate, .navbar_button,.navbar').toggleClass('active_adaptive');
        $('body').toggleClass('lock');
    });
});

    // скрытие и открытие всплывающего окна проверки зоны доставки
    $(document).mouseup(function (e) {
        form = $('.check-delivery-zone_form');
        btn = $('.cart_delivery-area-btn');
        if (btn.is(e.target) === true) {
            form.toggle(200);
        } else if (!form.is(e.target) && form.has(e.target).length === 0) {
            form.hide(200);
        }
    });