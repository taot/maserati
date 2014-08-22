function resize360view(container, content, width, height) {
    // calculate width and height
    var w = width;
    var h = height;
    if (w * 480 > h * 640) {
        w = h * 640 / 480;
    } else {
        h = w * 480 / 640;
    }
    content.css('width', w);
    content.css('height', h);

    container.css('width', width);
    container.css('height', height);

    // calculate position
    var left = (width - w) / 2;
    content.css('left', left);
};

function show360(src) {
    console.log('showing 360 view: ' + src);
    var container = $('.mobiles-360-container');
    $('.mobiles-360-body').attr('src', src);

    var content = $('.mobiles-360-content', container );
    var width = $(window).width();
    var height = $(window).height();
    resize360view(container, content, width, height);
    $(window).resize(function() {
        var width = $(window).width();
        var height = $(window).height();
        console.log("window resized - width: " + width + ", height: " + height);
        var container = $('.mobiles-360-container');
        resize360view(container, content, width, height);
    });

    //$('#mobiles-360-blur').fadeIn('fast');
    container.fadeIn('fast');

    var h1 = container.height();
    var h2 = content.height();
    var mTop = (h1 - h2) / 2;  
    content.css('margin-top', mTop);
};

function hide360() {
    console.log('hiding 360 view');
    //$('#mobiles-360-blur').fadeOut('slow');
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

    hImage = w * 534 / 1280;
    var ifm = $('.discover-image-iframe', container);
    ifm.height = hImage;
    ifm.width = w;
    $('.discover-image-iframe', container).css('height', hImage);
    
    // calculate position
    var left = (width - w) / 2;
    container.css('left', left);
};

function showDiscover(event) {
    console.log("showing discover page");
    var model = event.target.getAttribute('model');
    var container = $('#discover-container-' + model);
    var content = $('.discover-content', container);

//    var width = $(window).width();
//    var height = $(window).height();
//    resizeDiscover(container, content, width, height);

//    $(window).resize(function() {
//        var width = $(window).width();
//        var height = $(window).height();
//        console.log("window resized - width: " + width + ", height: " + height);
//        var container = $('.discover-container');
//        resizeDiscover(container, content, width, height);
//    });
    var src0 = '/mobiles/detail/' + model;
    $('.discover-image-iframe', container).attr('src', src0);
    container.fadeIn('fast');

     var h1 = container.height();
     var h2 = content.height();
    var mTop = (h1 - h2) / 2;  
    content.css('margin-top', mTop);

};

//function showDiscover(src) {
//    console.log("showing discover page");
//    var container = $('.discover-container');
//
//    var width = $(window).width();
//    var height = $(window).height();
//    resizeDiscover(container, width, height);
//
//    $(window).resize(function() {
//        var width = $(window).width();
//        var height = $(window).height();
//        console.log("window resized - width: " + width + ", height: " + height);
//        var container = $('.discover-container');
//        resizeDiscover(container, width, height);
//    });
//
//    container.fadeIn('fast');
//};

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
        showDiscover(event);
    });

    $('.close-discover-btn').click(function(event) {
        hideDiscover();
    });

    $('.discover-container').click(function(event) {
      event.stopPropagation();
      hideDiscover();
    });

    $('.discover-content').click(function(event) {
      event.stopPropagation();
    });

    $('.container-360').click(function(event) {
      event.stopPropagation();
      hide360();
    });

    $('.mobiles-360-content').click(function(event) {
      event.stopPropagation();
    });
});
