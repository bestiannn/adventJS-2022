function checkStepNumbers(systemNames, stepNumbers) {
  const namesAndSteps = [];

  for (let i = 0; i < systemNames.length; i++) {
    const systemName = systemNames[i];
    const stepNumber = stepNumbers[i];

    const system = namesAndSteps.find((system) => system.name === systemName);

    if (system) {
      system.steps.push(stepNumber);
    } else {
      namesAndSteps.push({
        name: systemName,
        steps: [stepNumber],
      });
    }
  }

  return namesAndSteps.every((system) => {
    for (let i = 0; i < system.steps.length - 1; i++) {
      const step = system.steps[i];
      const nextStep = system.steps[i + 1];

      if (step >= nextStep) {
        return false;
      }
    }

    return true;
  });
}

const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"];
const stepNumbers = [1, 33, 10, 2, 44, 20];

console.log(checkStepNumbers(systemNames, stepNumbers)); // => true

// tree_1 tiene los pasos: [1, 2]
// tree_2 tiene los pasos: [33, 44]
// house tiene los pasos: [10, 20]

// true: Los pasos de cada sistema están en orden estrictamente creciente

console.log(checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10])); // => false

// tree_1 tiene los pasos: [2, 1]
// house tiene los pasos: [10]

// false: tree_1 tiene los pasos de forma decreciente
