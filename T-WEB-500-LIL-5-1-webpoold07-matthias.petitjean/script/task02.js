/*
 * EPITECH PROJECT, 2022
 * Web-pool Day 07
 * Task number : 02
 */

whiteBox = document.getElementsByTagName("div")[2];

function getName() {
    name = prompt(`What's your name ?`);
    if (name == null || name === "null" || name === "") return;
    else confirmName(name);
}

function confirmName(name) {
    let confirmation = confirm(`Are you sure that name is your name ?`);
    confirmation ? displayName(name) : getName();
}

function displayName(name) {
    alert(`Hello ${name} !`);
    whiteBox.innerHTML = `Hello ${name} !`;
}

whiteBox.addEventListener("click", function() {
    // Dialog box for fill a name
    getName();
});