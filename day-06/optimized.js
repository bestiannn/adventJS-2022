function createCube(size) {
  return Array(size)
    .fill()
    .map(
      (_, i) =>
        `${" ".repeat(size - Number(i) - 1)}${"/\\".repeat(
          Number(i) + 1
        )}${"_\\".repeat(size)}\n`
    )
    .concat(
      Array(size)
        .fill()
        .map(
          (_, i) =>
            `${" ".repeat(size - Number(i) - 1)}${"\\/".repeat(
              Number(i) + 1
            )}${"_/".repeat(size)}${i === 0 ? "" : "\n"}`
        )
        .reverse()
    )
    .join("");
}

console.log(createCube(4));
