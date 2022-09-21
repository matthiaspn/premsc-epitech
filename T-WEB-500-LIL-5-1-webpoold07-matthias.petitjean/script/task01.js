/*
 * EPITECH PROJECT, 2022
 * Web-pool Day 07
 * Task number : 01
 */

counter = 0;
whiteBox = document.getElementsByTagName("div")[2];

whiteBox.addEventListener("click", function() {
    counter++;
    whiteBox.innerHTML = counter;
});