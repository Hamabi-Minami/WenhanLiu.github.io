/****************** YOUR NAME: Wenhan Liu

 The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

 You are encouraged to use the provided naming convention for ease of review.

 */

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

var modelName = "";
var duration = 1;

/****************** helper function ******************/

/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/


function recalculate() {
    // Get the calculated-cost span element
    let costLabel = document.getElementById("calculated-cost");

    // Calculate the new total cost
    let newTotalCost;
    switch (modelName) {
        case "Model XYZ":
            newTotalCost = duration * 100;
            break;
        case "Model CPRG":
            newTotalCost = duration * 213;
            break;
        // Add more cases for other model names if needed
        default:
            newTotalCost = 0; // Set a default value if modelName doesn't match any case
    }

    // Set the value of the calculated-cost element's innerHTML to the new total cost
    costLabel.innerHTML = newTotalCost;
}


/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
// modelButton.addEventListener("click", changeModel);


// checks the value of the model name variable
function changeModel() {

    // Get the switch button
    let switch_model = document.getElementById("model-text")

    modelName = switch_model.innerHTML;

    if (modelName === "Model XYZ") {

        switch_model.innerHTML = "Model CPRG";

    } else if (modelName === "Model CPRG") {

        switch_model.innerHTML = "Model XYZ";
    }

    // Recalculate the total cost
    recalculate();
}

// Step 3: Uncomment the following line to have the function run automatically when the pseudo-button is clicked
// modelButton.addEventListener("click", changeModel);


/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// Step 1: Create a variable to represent the "Change Duration" pseudo-button

// Step 2: Create a function called changeDuration()
function changeDuration() {

    // Get the duration-text span element
    let durationText = document.getElementById("duration-text");

    // Prompt the user for a new duration
    let newDuration = prompt("Enter new duration (in seconds):");

    // Validate if newDuration is a valid number
    if (!isNaN(newDuration) && newDuration !== null) {
        // Convert newDuration to an integer
        duration = parseInt(newDuration);

        // change the innerHTML of the duration-text span element to this new value
        durationText.innerHTML = duration;

        // Recalculate the total cost
        recalculate();
    } else {
        alert("Invalid input. Please enter a valid number.");
    }
}




