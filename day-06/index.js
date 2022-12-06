function createCube(size) {
  let cube = "";

  for (let i = 0; i < size; i++) {
    cube += " ".repeat(size - Number(i) - 1);
    cube += "/\\".repeat(Number(i) + 1);
    cube += "_\\".repeat(size);
    cube += "\n";
  }

  for (let i = size - 1; i >= 0; i--) {
    cube += " ".repeat(size - Number(i) - 1);
    cube += "\\/".repeat(Number(i) + 1);
    cube += "_/".repeat(size);
    cube += i === 0 ? "" : "\n";
  }

  return cube;
}

console.log(createCube(1));
