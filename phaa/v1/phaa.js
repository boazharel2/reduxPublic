$(function() {
    $(document).scroll(function() {
        var $nav = $(".navbar");
        var $notice = $("#notice");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        // if ($(this).scrollTop() > $nav.height()) {
        //     $notice.remove();
        // }
    });
});