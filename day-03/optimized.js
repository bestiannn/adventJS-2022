const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

// 171 puntos
function distributeGifts(packOfGifts, reindeers) {
  return Math.floor(reindeers.reduce((acc, reindeer) => acc + reindeer.length * 2, 0)/packOfGifts.reduce((acc, gift) => acc + gift.length, 0));
}

console.log(distributeGifts(packOfGifts, reindeers));
