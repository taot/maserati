function resize360view(container, content, width, height) {
    // calculate width and height
    var w = width;
    var h = height;
    if (w * 480 > h * 640) {
        w = h * 640 / 480;
    } else {
        h = w * 480 / 640;
    }

    var w = width;
    if (w < 820)
      w = 820; 
    var w = width * 0.55;
    var h = height ;
    h = w * 683 / 1024;

    content.css('width', w);
    content.css('height', h);

    // calculate position
    var left = (width - w) / 2;
    content.css('left', left);
};

function show360(src) {
    var src0 = src
    var container = $('.mobiles-360-container');
    var content = $('.mobiles-360-content', container);
    $('.mobiles-360-body').attr('src', src0);

    var width = $(window).width();
    var height = $(window).height();
    resize360view(container, content, width, height);
    $(window).resize(function() {
        var width = $(window).width();
        var height = $(window).height();
        var container = $('.mobiles-360-container');
        resize360view(container, content, width, height);
    });

    //$('#mobiles-360-blur').fadeIn('fast');
    container.fadeIn('fast');
    $(document.body).css({'overflow': 'hidden'});
};

function showExt360(src) {
    $('.exterior-btn').addClass('active');
    $('.interior-btn').removeClass('active');
    show360(src);
};

function showInt360(src) {
    $('.interior-btn').addClass('active');
    $('.exterior-btn').removeClass('active');
    show360(src);
};

function hide360() {
    $('#mobiles-360-blur').fadeOut('slow');
    $('.mobiles-360-container').fadeOut('slow');
    $(document.body).css({'overflow': 'scroll'});
};

function resizeDiscover(container, content, width, height) {
    // calculate width and height
    var w = width * 0.7;
    if (w < 850)
      w = 850; 
    var h = height ;
    h = w * 450 / 640;

    hImage = w * 534 / 1280;
    var ifm = $('.discover-image-iframe', container);
    ifm.height = hImage;
    ifm.width = w;
    $('.discover-image-iframe', container).css('height', hImage);
    
    content.css('width', w);
    content.css('height', h);
};

function showDiscover(event) {
    var model = event.target.getAttribute('model');
    var container = $('#discover-container-' + model);
    var content = $('.discover-content', container);

    var src0 = '/mobiles/detail/' + model;
    $('.discover-image-iframe', container).attr('src', src0);

    var width = $(window).width();
    var height = $(window).height();
    resizeDiscover(container, content, width, height);

    $(window).resize(function() {
        var width = $(window).width();
        var height = $(window).height();
        var container = $('.discover-container');
        resizeDiscover(container, content, width, height);
    });

    container.fadeIn('fast');
    $(document.body).css({'overflow': 'hidden'});
   
};

function hideDiscover() {
    $('.discover-container').fadeOut('slow');
    $(document.body).css({'overflow': 'scroll'});
};

function switchMobilesContent(event) {
    var tgt = event.target.getAttribute('tgt');
    $('.mobiles-content:visible').hide();
    $('#' + tgt).fadeIn('slow');
};


$(document).ready(function() {

    /* 360 view */
    $('.mobile-thumbnail').click(function(event) {
        var src1 = event.target.getAttribute('interior');
        if (src1 != '') {
            $('.interior-btn').attr('disabled', false);
            $('.interior-btn').attr('interior', src1);
        } else {
            $('.interior-btn').attr('disabled', false);
        }
        var src2 = event.target.getAttribute('exterior');
        if (src2 != '') {
            $('.exterior-btn').attr('disabled', false);
            $('.exterior-btn').attr('exterior', src2);
        } else {
            $('.exterior-btn').attr('disabled', true);
        }
        if (src2 != '') {
            showExt360(src2);
        } else if (src1 != '') {
            showInt360(src1);
        }
    });

    $('.interior-btn').click(function(event) {
        var src = event.target.getAttribute('interior');
        showInt360(src);
    });

    $('.exterior-btn').click(function(event) {
        var src = event.target.getAttribute('exterior');
        showExt360(src);
    });

    $('.close-360-btn').click(function(event) {
        hide360();
    });

    /* Discover */
    $('.discover-more-btn').click(function(event) {
        showDiscover(event);
    });

    $('.close-discover-btn').click(function(event) {
        hideDiscover();
    });

    $('.interfaceButton').click(function(event) {
        switchMobilesContent(event);
    });

    $('.interfaceButton').hover(function(event) {
      var s = $(this).parent().find("li").size();
      var i = $(this).attr('id').split("_").pop();
      var d = i * 100/s;   
      $('#hoverlay').css({left: d + "%"});
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

