function sortToys(toys, positions) {
  const toysAndPositions = {};
  for (const toy in toys) {
    toysAndPositions[toys[toy]] = positions[toy];
  }

  return Object.keys(toysAndPositions).sort((a, b) => {
    return toysAndPositions[a] - toysAndPositions[b];
  });
}

const toys = ["ball", "doll", "car", "puzzle"];
const positions = [2, 3, 1, 0];

console.log(sortToys(toys, positions));
// ['puzzle', 'car', 'ball', 'doll']

const moreToys = ["pc", "xbox", "ps4", "switch", "nintendo"];
const morePositions = [8, 6, 5, 7, 9];

console.log(sortToys(moreToys, morePositions));
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
