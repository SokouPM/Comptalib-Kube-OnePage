'use strict'

let previousButton = document.getElementById('previousButton');
let nextButton = document.getElementById('nextButton');
let opinions = document.querySelectorAll('#customersSlide .slide-item');
let actualCustomer = 0;

function previousCustomer() {

    if (screen.width <= 940) {

        actualCustomer--;

        if (actualCustomer < 0) { actualCustomer = opinions.length - 1; }

        customersTabChanges();
    }
}

function nextCustomer() {

    if (screen.width <= 940) {

        actualCustomer++

        if (actualCustomer >= opinions.length) { actualCustomer = 0; }

        customersTabChanges();
    }
}

function customersTabChanges() {
    for (let i = 0; i < opinions.length; i++) {

        if (i != actualCustomer) {
            opinions[i].classList.add("none");
        } else {
            opinions[i].classList.remove("none");
        }
    }
}

function runMobileScreen() {
    if (screen.width <= 940) {
        for (let i = 1; i < opinions.length; i++) {
            opinions[i].classList.add("none");
        }
    } else {
        for (let i = 1; i < opinions.length; i++) {
            opinions[i].classList.remove("none");
        }
    }
}
window.onload = runMobileScreen;
window.onresize = runMobileScreen;
previousButton.onclick = previousCustomer;
nextButton.onclick = nextCustomer;