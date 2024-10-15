import createDropdown from "./dropdown.js";
import conversion from "./conversion.js";

// main app container
const app = document.querySelector("#app");

// Create header elements
const header = document.createElement("div");
const headerText = document.createElement("h1");
const description = document.createElement("p");

// Create input and dropdown elements
const temperature = document.createElement("input");
const dropdownFrom = createDropdown("From Unit", [
  "Fahrenheit",
  "Celsius",
  "Kelvin",
]);
const dropdownTo = createDropdown("To Unit", [
  "Fahrenheit",
  "Celsius",
  "Kelvin",
]);

// Create conversion button elements
const convertButtonWrapper = document.createElement("div");
const convertButton = document.createElement("button");

// Create result text element
const resultText = document.createElement("p");

// Set classes
header.classList.add("header");
convertButtonWrapper.classList.add("convert-button-wrapper");
convertButton.classList.add("btn", "btn-convert", "disabled");
resultText.classList.add("result-text");

// Set content and attributes
headerText.innerText = "Temperature Converter";
description.innerText = "Enter the temperature, select the unit and convert";
temperature.type = "number";
convertButton.innerText = "Convert";
convertButton.disabled = true;

// Append elements to header
header.appendChild(temperature);
header.appendChild(dropdownFrom.element);
header.appendChild(dropdownTo.element);
header.appendChild(convertButtonWrapper);

// Append convert button to its wrapper
convertButtonWrapper.appendChild(convertButton);

// Append all elements to the app container
app.appendChild(headerText);
app.appendChild(description);
app.appendChild(header);
app.appendChild(resultText);

// conversion handler
const handleConversion = () => {
  if (temperature.value) {
    const number = parseInt(temperature.value);
    const from = dropdownFrom.getSelectedItem();
    const to = dropdownTo.getSelectedItem();
    const result = conversion(number, from, to);
    resultText.innerText = `${number} ${from} is ${Math.floor(result)} ${to}`;
  } else {
    fieldChecker();
  }
};

// checking for all the values are provided or not
const fieldChecker = () => {
  if (
    temperature.value &&
    dropdownFrom.getSelectedItem() &&
    dropdownTo.getSelectedItem()
  ) {
    convertButton.disabled = false;
    convertButton.classList.remove("disabled");
  } else {
    convertButton.disabled = true;
    convertButton.classList.add("disabled");
  }
};

// Add event listeners
document.addEventListener("click", fieldChecker);
convertButton.addEventListener("click", handleConversion);
