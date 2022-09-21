/*
 * EPITECH PROJECT, 2022
 * Web-pool Day 07
 * Task number : 14
 */

// Global variables
var elementsDatabase = [];


// Functions
function resetSearchResults() {
    $(".results").empty();
}

function getElementsByTag(tag) {
    return elementsDatabase.filter(function(data) {
       return data.tags.find(el => el === tag);
    });
}

function getElementsByName(name) {
    let regex = new RegExp(name);
    regex.ignoreCase;
    return elementsDatabase.filter(function(data) {
        return data.text.match(regex); // TODO: Fix it
    });
}

function getElementsByType(type) {
    return elementsDatabase.filter(function(data) {
        return data.type === type;
    })
}

function displayElements(foundElements) {
    for (const element of foundElements)
        $(".results").append(`<li class="${element.type}">${element.text} (${element.tags.join(' ')})</li>`);
}


$(document).ready(function() {
    // Adding a element into the search engine
    $("input[type=submit]").click(function() {
        // Text and type
        let textInputValue = $("input[type=text]").val();
        let dropdownValue = $("#dropdown option:selected").val();

        // Tags
        let tagsValue = document.getElementsByTagName("input")[1].value.split(' ');

        // Save and display
        elementsDatabase.push({text: textInputValue, type: dropdownValue, tags: tagsValue});
        $(".creation-form").append(`<li class="${dropdownValue}">${textInputValue} (${tagsValue.join(' ')})</li>`);
    });


    // Search by a keyword, type or both and reset
    const searchButton = document.getElementsByTagName("button")[0];
    const resetButton = document.getElementsByTagName("button")[1];

    searchButton.addEventListener("click", function() {
        let typeInput = $("#types option:selected").val();
        let textInput = document.getElementsByTagName("input")[2].value;
        resetSearchResults();

        if (textInput && typeInput === "nothing") {
            const foundElements = getElementsByName(textInput);
            if (foundElements)
                displayElements(foundElements);
        } else if (!textInput && typeInput !== "nothing"){
            const foundElements = getElementsByType(typeInput);
            if (foundElements)
                displayElements(foundElements);
        } else {
            let foundElements = getElementsByName(textInput) && getElementsByType(typeInput);
            if (foundElements)
                displayElements(foundElements);
        }
    });

    resetButton.addEventListener("click", function() {
        resetSearchResults();
    });


    // Task 15
    const searchTagButton = document.getElementsByTagName("button")[2];
    searchTagButton.addEventListener("click", function() {
       let tagsInput = document.getElementsByTagName("input")[4].value.split(' ');
       resetSearchResults();

       for (const tag of tagsInput) {
           const foundElements = getElementsByTag(tag);
           for (const element of foundElements)
               $(".results").append(`<li class="${element.type}">${element.text} (${element.tags.join(' ')})</li>`);
       }
    });
});
