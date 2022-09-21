/*
 * EPITECH PROJECT, 2022
 * Web-pool Day 07
 * Task number : 13
 */

// Global variables
var elementsDatabase = [];

// Functions
function resetSearchResults() {
    $(".results").empty();
}

function getElementsByType(type) {
    return elementsDatabase.filter(function(data) {
        return data.type === type;
    });
}

$(document).ready(function() {
    // Task 12
    $(document).ready(function() {
        $("input[type=submit]").click(function() {
            let textInputValue = $("input[type=text]").val();
            let dropdownValue = $("#dropdown option:selected").val();
            elementsDatabase.push({text: textInputValue, type: dropdownValue});
            $(".creation-form").append(`<li class="${dropdownValue}">${textInputValue}</li>`)
        });
    });

    // Task 13
    const searchButton = document.getElementsByTagName("button")[0];
    const resetButton = document.getElementsByTagName("button")[1];

    searchButton.addEventListener("click", function() {
        let selectedType = $("#types option:selected").val();
        const foundElements = getElementsByType(selectedType);
        if (foundElements) {
            for (let element of foundElements)
                $(".results").append(`<li class="${element.type}">${element.text}</li>`);
        }
    });

    resetButton.addEventListener("click", function() {
        resetSearchResults();
    });
});
