/*
 * EPITECH PROJECT, 2022
 * Web-pool Day 07
 * Task number : 03
 */

window.onload = function() {
    let whiteBox = document.getElementsByTagName("div")[2];
    let keyboardEnter = "";

    document.addEventListener('keydown', function(e) {
        keyboardEnter += e.key;
        whiteBox.innerHTML = keyboardEnter.slice(-42);
    });
};