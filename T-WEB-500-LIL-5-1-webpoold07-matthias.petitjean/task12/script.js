/*
 * EPITECH PROJECT, 2022
 * Web-pool Day 07
 * Task number : 12
 */

$(document).ready(function() {
    $("input[type=submit]").click(function() {
        let textInputValue = $("input[type=text]").val();
        let dropdownValue = $("#dropdown option:selected").val();
        $("ul").append(`<li class="${dropdownValue}">${textInputValue}</li>`)
    });
});
