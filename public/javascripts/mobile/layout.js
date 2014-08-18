function toggleMenuBar(event) {
    var display = $('.menu-bar').css('display');
    if (display == 'none') {
        $('.menu-bar').fadeIn('slow', function() {
            $('.menu-btn').css('background-image', 'url(/assets/images/menu_main_close.jpg)');
        });
    } else {
        $('.menu-bar').fadeOut('slow', function() {
            $('.menu-btn').css('background-image', 'url(/assets/images/menu_main.jpg)');
        });
    }
};

$(document).ready(function() {

    $('.menu-btn').click(function(event) {
        toggleMenuBar(event);
    });
});