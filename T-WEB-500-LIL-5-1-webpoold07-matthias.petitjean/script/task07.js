/*
 * EPITECH PROJECT, 2022
 * Web-pool Day 07
 * Task number : 07
 */

// Variables
acceptCookiesLink = document.getElementsByTagName("a")[0];
whiteBox = document.getElementsByTagName("div")[2];

// Functions
function setCookie() {
    let date = new Date();
    date.setTime(date.getTime() + (24 * 60 * 60 * 1000)); // Set 1 day after the date
    document.cookie = `acceptsCookies=true; expires= ${date.toUTCString()}`;
}

function deleteCookie() {
    let date = new Date();
    date.setTime(date.getTime() - (24 * 60 * 60 * 1000));
    document.cookie = `acceptsCookies=; expires=${date.toUTCString()}`
    document.location.reload();
}

// Event listeners
window.onload = function() {
    if (document.cookie)
        whiteBox.innerHTML = `<button onClick="deleteCookie()">Delete the cookie</button>`;
}

acceptCookiesLink.addEventListener("click", () => {
    setCookie();
    document.location.reload();
});