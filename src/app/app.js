import { inputAreValid } from './utils/inputs-are-valid';
import { parseInput } from './utils/parse-inputs';

export const run = (alertService, componentService) => {
  alertService.hideErrors();

  componentService.onClick(() => {
    alertService.hideErrors();
    const inputs = componentService.getInputs();
    const parsedInputs = parseInput(...inputs);
    if (inputAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs;
      componentService.setResult(numA + numB);
    } else {
      componentService.setResult('');
      alertService.handleAdditionError(inputs, parsedInputs);
    }
  });
};
