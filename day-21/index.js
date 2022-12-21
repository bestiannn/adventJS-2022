function printTable(gifts) {
  let table = "";

  let maxGiftLength = Math.max(
    "Gift".length,
    ...gifts.map((gift) => gift.name.length)
  );
  let maxQuantityLength = Math.max(
    "Quantity".length,
    ...gifts.map((gift) => gift.quantity.toString().length)
  );

  table += "+".repeat(maxGiftLength + maxQuantityLength + 7);
  table += "\n| Gift ";
  table += " ".repeat(maxGiftLength - "Gift".length);
  table += "| Quantity ";
  table += " ".repeat(maxQuantityLength - "Quantity".length);
  table += "|\n| ";
  table += "-".repeat(maxGiftLength);
  table += " | ";
  table += "-".repeat(maxQuantityLength);
  table += " |\n";

  for (const { name, quantity } of gifts) {
    table += "| ";
    table += name;
    table += " ".repeat(maxGiftLength - name.length);
    table += " | ";
    table += quantity;
    table += " ".repeat(maxQuantityLength - quantity.toString().length);
    table += " |\n";
  }

  table += "*".repeat(maxGiftLength + maxQuantityLength + 7);

  return table;
}

console.log(
  printTable([
    { name: "Game", quantity: 2 },
    { name: "Bike", quantity: 1 },
    { name: "Book", quantity: 3 },
  ])
);

// +++++++++++++++++++
// | Gift | Quantity |
// | ---- | -------- |
// | Game | 2        |
// | Bike | 1        |
// | Book | 3        |
// *******************

console.log("\n--------------------\n");

console.log(
  printTable([
    { name: "PlayStation 5", quantity: 9234782374892 },
    { name: "Book Learn Web Dev", quantity: 23531 },
  ])
);
// ++++++++++++++++++++++++++++++++++++++
// | Gift               | Quantity      |
// | ------------------ | ------------- |
// | PlayStation 5      | 9234782374892 |
// | Book Learn Web Dev | 23531         |
// **************************************

console.log("\n--------------------\n");

console.log(
  "+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 2        |\n| Bike | 1        |\n| Book | 3        |\n*******************"
);
