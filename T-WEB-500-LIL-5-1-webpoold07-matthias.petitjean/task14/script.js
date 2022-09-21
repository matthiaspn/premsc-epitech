/*
 * EPITECH PROJECT, 2022
 * Web-pool Day 07
 * Task number : 14
 */

function resetSearchResults() {
    $(".results").empty();
}

$(document).ready(function() {
    // Task 12
    $("input[type=submit]").click(function() {
        let textInputValue = $("input[type=text]").val();
        let dropdownValue = $("#dropdown option:selected").val();
        $(".creation-form").append(`<li class="${dropdownValue}">${textInputValue}</li>`)
    });

    // Task 13 & 14
    const searchButton = document.getElementsByTagName("button")[0];
    const resetButton = document.getElementsByTagName("button")[1];

    searchButton.addEventListener("click", function() {
        let typeDropdown = $("#types option:selected");
        let wordInput = document.getElementsByTagName("input")[2].value;
        resetSearchResults();

        $("li").each(function() {
            const regex = new RegExp(wordInput);
            regex.ignoreCase;

            if (wordInput && typeDropdown.val() === "nothing") {
                if (regex.test($(this).text()))
                    $(".results").append(`<li class="${$(this).attr("class")}">${$(this).text()}</li>`);
            } else if (!wordInput && $(this).hasClass(typeDropdown.val())) {
                if ($(this).hasClass(typeDropdown.val()))
                    $(".results").append(`<li class="${typeDropdown.val()}">${$(this).text()}</li>`);
            } else {
                if (regex.test($(this).text()) && $(this).hasClass(typeDropdown.val())) {
                    $(".results").append(`<li class="${typeDropdown.val()}">${$(this).text()}</li>`);
                }
            }
        });
    });

    resetButton.addEventListener("click", function() {
        resetSearchResults();
    });
});
