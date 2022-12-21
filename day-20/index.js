function howManyReindeers(reindeerTypes, gifts) {
  reindeerTypes.sort((a, b) => b.weightCapacity - a.weightCapacity);

  function calculateOptimalReindeerCombination(weight) {
    const reindeersList = [];
    const reindeerInfo = [...reindeerTypes].reverse();

    while (weight > 0) {
      for (const reindeers of reindeerInfo) {
        if (weight >= reindeers.weightCapacity) {
          weight -= reindeers.weightCapacity;
          if (
            reindeersList.some((reindeer) => reindeer.type === reindeers.type)
          ) {
            reindeersList.find(
              (reindeer) => reindeer.type === reindeers.type
            ).num += 1;
          } else {
            reindeersList.push({ type: reindeers.type, num: 1 });
          }
        }
      }
    }
    return reindeersList;
  }

  let result = [];
  for (let gift of gifts) {
    let optimalCombination = calculateOptimalReindeerCombination(gift.weight);
    result.push({
      country: gift.country,
      reindeers: [...optimalCombination].reverse(),
    });
  }
  return result;
}

const reindeerTypes = [
  { type: "Nuclear", weightCapacity: 50 },
  { type: "Electric", weightCapacity: 10 },
  { type: "Gasoline", weightCapacity: 5 },
  { type: "Diesel", weightCapacity: 1 },
];

const gifts = [
  { country: "Spain", weight: 30 },
  { country: "France", weight: 17 },
  { country: "Italy", weight: 50 },
];

console.log(JSON.stringify(howManyReindeers(reindeerTypes, gifts), null, 2));
// [{
//   country: 'Spain',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }, {
//   country: 'France',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 1 },
//     { type: 'Diesel', num: 2 }
//   ]
//  }, {
//   country: 'Italy',
//   reindeers: [
//     { type: 'Electric', num: 3 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }]
