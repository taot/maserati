
$(document).ready(function() {

    $(".wechat").popover({
      content: $("#promoteQrcode").html()
      , html: true
    });
});