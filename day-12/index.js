function selectSleigh(distance, sleighs) {
  for (const sleigh of sleighs.reverse()) {
    if (20 >= sleigh.consumption * distance) {
      return sleigh.name;
    }
  }
  return null;
}

const distance = 30;
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 },
];

console.log(selectSleigh(distance, sleighs)); // => "Dancer"
