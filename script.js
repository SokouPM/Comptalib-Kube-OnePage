$(document).ready(function () {
    $('#ScrollEngagements').on('click', function (e) {
        e.preventDefault();
        let page = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(page).offset().top }, 800);
    });
});