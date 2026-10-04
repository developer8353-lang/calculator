let display = document.getElementById("display");


// Add number/operator
function addValue(value) {

    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}


// Clear all
function clearDisplay() {
    display.value = "0";
}


// Delete last character
function deleteNumber() {

    if (display.value.length === 1) {
        display.value = "0";
    } else {
        display.value = display.value.slice(0, -1);
    }
}


// Calculate result
function calculate() {

    try {

        let expression = display.value;

        let result = eval(expression);

        display.value = result;

    } catch (error) {

        display.value = "Error";

    }
}