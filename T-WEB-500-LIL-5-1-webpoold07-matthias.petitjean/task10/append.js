/*
 * EPITECH PROJECT, 2022
 * Web-pool Day 07
 * Task number : 10
 */

$(document).ready(function() {
    $("button").click(function() {
        let textInputValue = $("input").val();
        $(`<div>${textInputValue}</div>`).insertAfter("button");
    });
});
