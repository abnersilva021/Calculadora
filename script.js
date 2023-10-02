let displayValue = '';

function updateDisplay() {
  const display = document.getElementById('display');
  display.value = displayValue;
}

function appendCharacter(character) {
  displayValue += character;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function deleteLastChar() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}