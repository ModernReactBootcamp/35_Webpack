export const inputAreValid = (...input) => {
  return input.every(num => typeof num === 'number' && !isNaN(num));
};
