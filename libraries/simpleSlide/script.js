'use strict'
if ($(document).width() > 940) {

    let distance = 200;
    let position = $('#customersSlide').scrollLeft();

    $("#nextButton").click(function () {
        let maxScrollLeft = $('#customersSlide').prop("scrollWidth") - $('#customersSlide').width();
        $("#customersSlide").animate({ scrollLeft: position += distance }, 400);
        if (position > maxScrollLeft) position = maxScrollLeft;
    });

    $("#previousButton").click(function () {
        $("#customersSlide").animate({ scrollLeft: position -= distance }, 400);
        if (position < 0) position;
    });
}