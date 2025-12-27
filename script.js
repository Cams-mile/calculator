// Select display input
const display = document.getElementById("display");

// Append value to display
function appendValue(value) {
  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculateResult() {
  try {
    if (display.value.trim() === "") {
      alert("Please enter a calculation");
      return;
    }

    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
