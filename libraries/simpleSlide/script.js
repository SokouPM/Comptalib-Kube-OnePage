'use strict'

let x = 0;
let dist = 200;
let max = 600;

$("#nextButton").click(function () {
    x = x + dist;
    if (x > max) { x = max }
    $("#customersSlide").animate({ scrollLeft: x }, 400);
    console.log(x);
});

$("#previousButton").click(function () {
    x = x - dist;
    if (x < 0) { x = 0 }
    $("#customersSlide").animate({ scrollLeft: x }, 400);
    console.log(x);
});