$(document).ready(function () {
    $('#ScrollEngagements').on('click', function (e) {
        e.preventDefault();
        let findOutMoreDest = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(findOutMoreDest).offset().top }, 800);
    });
});

$(document).ready(function () { // To center e-commerce pack
    let packWidth =  $('.pack').width();
    let viewWidth =  $(window).width();
    let centerDim = (viewWidth - packWidth) / 2;
    $('.packsSlide').animate({ scrollLeft: $('#ecommercePack').offset().left - centerDim }, 1);
});