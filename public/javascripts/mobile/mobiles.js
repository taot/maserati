function resize360view(container, width, height) {
    // calculate width and height
    var w = width;
    var h = height;
    if (w * 480 > h * 640) {
        w = h * 640 / 480;
    } else {
        h = w * 480 / 640;
    }
    container.css('width', w);
    container.css('height', h);

    // calculate position
    var left = (width - w) / 2;
    container.css('left', left);
};

function show360(src) {
    console.log('showing 360 view: ' + src);
    var container = $('.mobiles-360-container');
    $('.mobiles-360-body').attr('src', src);

    var width = $(window).width();
    var height = $(window).height();
    resize360view(container, width, height);
    $(window).resize(function() {
        var width = $(window).width();
        var height = $(window).height();
        console.log("window resized - width: " + width + ", height: " + height);
        var container = $('.mobiles-360-container');
        resize360view(container, width, height);
    });

    $('#mobiles-360-blur').fadeIn('fast');
    container.fadeIn('fast');
};

function hide360() {
    console.log('hiding 360 view');
    $('#mobiles-360-blur').fadeOut('slow');
    $('.mobiles-360-container').fadeOut('slow');
};

function resizeDiscover(container, width, height) {
    // calculate width and height
    var w = width;
    var h = height;
    if (w * 480 > h * 640) {
        w = h * 640 / 480;
    } else {
        h = w * 480 / 640;
    }
    container.css('width', w);
    container.css('height', h);

    // calculate position
    var left = (width - w) / 2;
    container.css('left', left);
};

function showDiscover(src) {
    console.log("showing discover page");
    var container = $('.discover-container');

    var width = $(window).width();
    var height = $(window).height();
    resizeDiscover(container, width, height);

    $(window).resize(function() {
        var width = $(window).width();
        var height = $(window).height();
        console.log("window resized - width: " + width + ", height: " + height);
        var container = $('.discover-container');
        resizeDiscover(container, width, height);
    });

    container.fadeIn('fast');
};

function hideDiscover() {
    console.log('hiding discover page');
    $('.discover-container').fadeOut('slow');
};

$(document).ready(function() {

    $('.mobile-thumbnail').click(function(event) {
        var src = event.target.getAttribute('interior');
        show360(src);
    });

    $('.close-360-btn').click(function(event) {
        hide360();
    });

    $('.discover-more-btn').click(function(event) {
        var src = event.target.getAttribute('interior');
        showDiscover("");
    });

    $('.close-discover-btn').click(function(event) {
        hideDiscover();
    });
});