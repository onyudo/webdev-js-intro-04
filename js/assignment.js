"use strict"

// Create your references to the html elements here
const ageInputEl = document.getElementById("age-input")
const submissionBtn = document.getElementById("submission-btn");
const response = document.getElementById("response");

// create a mutable variable called age and do not assign it a value.

let age;


function checkAgeAndRespond() {
    age = parseInt(ageInputEl.value);

     // Validate the input: if the age is not a valid number, show an error
     if (isNaN(age) || age == 0) {
        response.textContent = "Please enter a valid age.";
        return;
    }
    
    // Write your code below
    if (age >= 21) { // if age is greater than or equal to 21
        response.textContent = "You can vote and purchase alchol.";
    } else if (age >= 18 && age < 21 ) { // if age is greater than and equal to18 but less than 21
        response.textContent = "You can vote, but you cannot purchase alcohol.";
    } else { // if age is less than 18
        response.textContent = "You cannot vote and you cannot purchase alcohol.";
    }

}


submissionBtn.addEventListener("click", function () {
    checkAgeAndRespond();
});


function validateInput(event) {
    const invalidCharacters = ["e", "E", "-", "+"];
    if (invalidCharacters.includes(event.key)) {
        event.preventDefault();
    }
}

ageInputEl.addEventListener("keydown", validateInput);
