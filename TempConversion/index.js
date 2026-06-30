const value1 = document.getElementById("value1");
const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const result = document.getElementById("result");
let temp;

function tempConversion() {
    if (toCelsius.checked) {
        temp = Number(value1.value);
        temp = (temp - 32) * (5 / 9); // Formula for Celsius
        result.textContent = temp.toFixed(1) + "°C";
    } 
    else if (toFahrenheit.checked) {
        temp = Number(value1.value);
        temp = (temp * 9 / 5) + 32;   // Formula for Fahrenheit
        result.textContent = temp.toFixed(1) + "°F";
    } 
    else {
        result.textContent = "Select a Unit";
    }
}
