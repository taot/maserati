
$(document).ready(function() {

    $(".wechat").popover({
      content: $("#promoteQrcode").html()
      , html: true
    });

//    $('.wechat').click(function(event) {
//        $('.qrcode').fadeToggle('fast');
//    });
});