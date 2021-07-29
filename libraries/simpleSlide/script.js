'use strict'

let x = 0;
let dist = 300;

$("#nextButton").click(function () {
    x = x + dist;
    $("#customersSlide").animate({ scrollLeft: x }, 400);
});

$("#previousButton").click(function () {
    x = x - dist;
    $("#customersSlide").animate({ scrollLeft: x }, 400);
});