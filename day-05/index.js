const giftsCities = [12, 3, 11, 5, 7];
const maxGifts = 20;
const maxCities = 3;

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const getCombinations = (array, n) => {
    if (n === 0) {
      return [[]];
    }
    if (array.length === 0) {
      return [];
    }
    const combinations = [];
    for (let i = 0; i < array.length; i++) {
      const currentElement = array[i];
      const remainingElements = array.slice(i + 1);
      const remainingCombinations = getCombinations(remainingElements, n - 1);
      for (const combo of remainingCombinations) {
        combinations.push([currentElement, ...combo]);
      }
    }
    return combinations;
  };

  let actualMaxGifts = 0;

  for (let i = maxCities; i > 0; i--) {
    let combos = getCombinations(giftsCities, i);

    for (const combo of combos) {
      const sum = combo.reduce((acc, curr) => acc + curr, 0);
      console.log(sum);
      if (maxGifts >= sum && sum > actualMaxGifts) {
        actualMaxGifts = sum;
      }
    }

    if (actualMaxGifts !== 0) {
      break;
    }
  }

  return actualMaxGifts;
}

console.log("-", getMaxGifts(giftsCities, maxGifts, maxCities)); // 20
