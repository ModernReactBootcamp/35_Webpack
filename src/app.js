const numberOneInput = document.getElementById('numberOne');
const numberTwoInput = document.getElementById('numberTwo');
const addValuesButton = document.getElementById('addValues');
const resultDiv = document.getElementById('result');
const errorBox = document.getElementById('error');

const parseInput = (...input) => {
  return input.map(str => parseInt(str));
};

const inputAreValid = (...input) => {
  return input.every(num => typeof num === 'number' && !isNaN(num));
};

const handleAdditionError = (inputs, numbers) => {
  const fullMessage = inputs.reduce((message, str, index) => {
    if (inputAreValid(numbers[index])) {
      return message + '';
    } else {
      return message + `${str} is not a number`;
    }
  }, 'Please, enter two valid numbers!');
  errorBox.classList.remove('invisible');
  errorBox.innerText = fullMessage;
};

const hideErrors = () => {
  errorBox.classList.add('invisible');
};

hideErrors();

addValuesButton.addEventListener('click', () => {
  hideErrors();
  const inputs = [numberOneInput.value, numberTwoInput.value];
  const parsedInputs = parseInput(...inputs);
  if (inputAreValid(...parsedInputs)) {
    const [numA, numB] = parsedInputs;
    resultDiv.innerText = numA + numB;
  } else {
    resultDiv.innerText = '';
    handleAdditionError(inputs, parsedInputs);
  }
});
