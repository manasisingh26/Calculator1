let calculation = '';

function addToDisplay(value) {
  calculation += value;
  document.getElementById('display').value = calculation;
}

function clearDisplay() {
  calculation = '';
  document.getElementById('display').value = '0';
}

function backspace() {
  calculation = calculation.slice(0, -1);
  document.getElementById('display').value = calculation;
}

function calculate() {
  calculation = eval(calculation);
  document.getElementById('display').value = calculation;
}

