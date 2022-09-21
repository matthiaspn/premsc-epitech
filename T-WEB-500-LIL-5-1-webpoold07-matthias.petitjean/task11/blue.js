/*
 * EPITECH PROJECT, 2022
 * Web-pool Day 07
 * Task number : 11
 */

$(document).ready(function() {
    $("p").hover(function() {
        $(this).addClass("blue");
    });


    let className = "highlighted";
    $("p").click(function() {
       if ($(this).hasClass(className))
           $(this).removeClass(className);
       else
           $(this).addClass(className);
    });
});
