// Select the temperature input and conversion type elements
const temperatureInput = document.getElementById("temperatureInput")
const conversionType = document.getElementById("conversionType")
const result = document.getElementById("result");
const form = document.getElementById("tempForm");

/**
 * Function to validate user input
 * isNaN(): Checks if the converted value is not a number (invalid input).
 */
function isValidNumber(value){
    // Check if the input is a valid number
    return !isNaN(value) && value.trim() !== "";
}

// Function to convert Celsius to Fahrenheit
function convertCelsiusToFahrenheit(celsius){
    return (celsius * 9 / 5) + 32;
}

// Function to convert Fahrenheit to Celsius
function convertFahrenheitToCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
}

// Function to handle conversion based on selected type
function handleConversion(event){
    event.preventDefault(); // Prevent form from reloading the page

    const inputValue = temperatureInput.value;
    const selectedType = conversionType.value;

    //validate input
    if(!isValidNumber(inputValue)){
        alert("please enter a valid numeric temperature.");
        return;
    }


    // Parse input as float
    // parseFloat(): Converts the string input to a number for calculations.

    const temp = parseFloat(inputValue);
    let output = "";

  // Use control structures to perform conversion
    if (selectedType === "cToF") {
    const fahrenheit = convertCelsiusToFahrenheit(temp);
    output = `${temp} °C is equal to ${fahrenheit.toFixed(2)} °F`;
    } else if (selectedType === "fToC") {
    const celsius = convertFahrenheitToCelsius(temp);
    output = `${temp} °F is equal to ${celsius.toFixed(2)} °C`;
    } else {
    output = "Please select a conversion type.";
    }

    // Display result
    result.innerHTML = output;
}

/**  
 * Add event listener to handle form submission
 * form.addEventListener("submit"):
 * Triggers on both button click and pressing Enter in the input field.
*/

form.addEventListener("submit", handleConversion);
