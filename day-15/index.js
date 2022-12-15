function decorateTree(base) {
  let arrayTree = [base];
  let decorations = ["R", "P", "B"];

  base = base.split(" ");

  for (let i = 0; i < base.length - 1; i++) {
    let actualLevel = [];

    for (let j = 1; j < arrayTree[i].split(" ").length; j++) {
      if (arrayTree[i].split(" ")[j - 1] === arrayTree[i].split(" ")[j]) {
        actualLevel.push(arrayTree[i].split(" ")[j - 1]);
      } else {
        actualLevel.push(
          decorations.find((x) => {
            if (
              x !== arrayTree[i].split(" ")[j - 1] &&
              x !== arrayTree[i].split(" ")[j]
            ) {
              return x;
            }
          })
        );
      }
    }
    arrayTree.push(actualLevel.join(" "));
  }
  return arrayTree.reverse();
}

console.log(decorateTree("B P R P"));
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

console.log(decorateTree("B B")); // ['B', 'B B']
