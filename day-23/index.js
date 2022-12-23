function executeCommands(commands) {
  const registers = {
    V00: 0,
    V01: 0,
    V02: 0,
    V03: 0,
    V04: 0,
    V05: 0,
    V06: 0,
    V07: 0,
  };

  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];
    const [instruction, ...args] = command.split(" ");

    switch (instruction) {
      case "MOV":
        if (!isNaN(args[0].split(",")[0])) {
          const [value, register] = args[0].split(",");
          registers[register] = parseInt(value);
        } else {
          const [registerToMove, registerToMoveTo] = args[0].split(",");
          registers[registerToMoveTo] = registers[registerToMove];
        }
        break;
      case "ADD":
        const [registerToAdd, registerToSum] = args[0].split(",");
        registers[registerToAdd] =
          (registers[registerToAdd] + registers[registerToSum]) % 256;
        break;
      case "DEC":
        const [registerToDecrement] = args;
        registers[registerToDecrement] =
          registers[registerToDecrement] - 1 === -1
            ? 255
            : registers[registerToDecrement] - 1;
        break;
      case "INC":
        const [registerToIncrement] = args;
        registers[registerToIncrement] =
          (registers[registerToIncrement] + 1) % 256;
        break;
      case "JMP":
        const [commandToJump] = args;
        if (registers["V00"] !== 0) {
          i = parseInt(commandToJump) - 1;
        }
        break;
    }
  }

  return Object.values(registers);
}

console.log(
  executeCommands([
    "MOV 5,V00", // V00 es 5
    "MOV 10,V01", // V01 es 10
    "DEC V00", // V00 ahora es 4
    "ADD V00,V01", // V00 = V00 + V01 = 14
  ])
);

// Output: [14, 10, 0, 0, 0, 0, 0]
console.log("\n");
console.log(
  executeCommands([
    "MOV 255,V00", // V00 es 255
    "INC V00", // V00 es 256, desborda a 0
    "DEC V01", // V01 es -1, desborda a 255
    "DEC V01", // V01 es 254
  ])
);

// Output: [0, 254, 0, 0, 0, 0, 0]
console.log("\n");
console.log(
  executeCommands([
    "MOV 10,V00", // V00 es 10
    "DEC V00", // decrementa V00 en 1  <---┐
    "INC V01", // incrementa V01 en 1      |
    "JMP 1", // bucle hasta que V00 sea 0 ----┘
    "INC V06", // incrementa V06 en 1
  ])
);

// Output: [ 0, 10, 0, 0, 0, 0, 1, 0 ]
