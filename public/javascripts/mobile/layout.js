function toggleMainMenuBar(event) {
    var display = $('.main-menu-bar').css('display');
    if (display == 'none') {
        hideShowMenuBar();
        showMainMenuBar();
    } else {
        hideMainMenuBar();
    }
};

function showMainMenuBar() {
    $('.main-menu-bar').fadeIn('slow', function() {
        $('.main-menu-btn').css('background-image', 'url(/assets/images/menu_main_close.jpg)');
    });
};

function hideMainMenuBar() {
    $('.main-menu-bar').fadeOut('slow', function() {
        $('.main-menu-btn').css('background-image', 'url(/assets/images/menu_main.jpg)');
    });
};

function toggleShowMenuBar(event) {
    var display = $('.show-menu-bar').css('display');
    if (display == 'none') {
        hideMainMenuBar();
        showShowMenuBar();
    } else {
        hideShowMenuBar();
    }
};

function showShowMenuBar() {
    $('.show-menu-bar').fadeIn('slow', function() {
        $('.show-menu-btn').css('background-image', 'url(/assets/images/menu_extra_close.jpg)');
    });
};

function hideShowMenuBar() {
    $('.show-menu-bar').fadeOut('slow', function() {
        $('.show-menu-btn').css('background-image', 'url(/assets/images/menu_extra.jpg)');
    });
};

$(document).ready(function() {

    $('.main-menu-btn').click(function(event) {
        toggleMainMenuBar(event);
    });

    $('.show-menu-btn').click(function(event) {
        toggleShowMenuBar(event);
    });
});
