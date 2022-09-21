/*
 * EPITECH PROJECT, 2022
 * Web-pool Day 07
 * Task number : 04
 */

// Variables
body = document.getElementsByTagName("body")[0];
whiteBox = document.getElementsByTagName("div")[2];
increaseButton = document.getElementsByTagName("button")[0];
decreaseButon = document.getElementsByTagName("button")[1];
backgroundSelector = document.getElementsByTagName("select")[0];

body.style.fontSize = getComputedStyle(body).fontSize; // This is the size
fontSize = Number(body.style.fontSize.replace(/px$/, ''));

// Event listeners
increaseButton.addEventListener("click", function() {
    body.style.fontSize = `${++fontSize}px`;
});

decreaseButon.addEventListener("click", function() {
    body.style.fontSize = `${--fontSize}px`;
});

backgroundSelector.addEventListener("change", function() {
    body.style.backgroundColor = `${backgroundSelector[backgroundSelector.selectedIndex].value}`;
});