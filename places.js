// Hands-On Project 04-4
// A: Christopher Merriman  D: 2.21.18
// F: places.js

var places = []; // new array to store entered places
var i = 1; // counter variable to track array indexes

// function to add input to array and then generate list after 5th submission
function processInput() {
    // Statement makes this function, and only this function, to be interpreted in strict mode
    "use strict";
    // Was missing an aposthrophe so was taking in everything as a string
    places[i] = document.getElementById('placeBox').value; // add entered value to array
    // Was missing a semi-colon
    document.getElementById("placeBox").value = ""; // clear text box
    if (i < 5) { // iterate counter variable
        i++;
    }
    else { // add entered value to array and write results to document
        document.getElementById("resultsExpl").innerHTML = "You entered the following places:";
        // var had to be added before listItem because it had been the first time it was declared and it needs the var when in strict mode, rather than the normally loose JS format
        var listItem = "";
        // For statement was trying to call the variable j, which didn't exist so it was replaced with the global variable of i
        for (i = 1; i < 6; i++) { // write each array element to its corresponding list item
               listItem = "item" + i;
               document.getElementById(listItem).innerHTML = places[i];
            }
    }
    // Was missing a closing }, causing the function to never end
}

    // add backward compatible event listener to Submit button
      var submitButton = document.getElementById("button");
      if (submitButton.addEventListener) {
        submitButton.addEventListener("click", processInput, false); 
      } else if (submitButton.attachEvent)  {
        submitButton.attachEvent("onclick", processInput);
      }