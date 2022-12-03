const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

function distributeGifts(packOfGifts, reindeers) {
  const gifWeight = packOfGifts.reduce((acc, gift) => acc + gift.length, 0)
  const reindeersWeight = reindeers.reduce((acc, reindeer) => acc + reindeer.length * 2, 0)

  return Math.floor(reindeersWeight / gifWeight)
}

console.log((distributeGifts(packOfGifts, reindeers)))