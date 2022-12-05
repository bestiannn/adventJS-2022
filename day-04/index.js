// const boxes = [
//   { l: 1, w: 1, h: 1 },
//   { l: 3, w: 3, h: 3 },
//   { l: 2, w: 2, h: 2 }, //true
// ];

// const boxes = [
//   { l: 1, w: 1, h: 1 },
//   { l: 2, w: 2, h: 2 },
//   { l: 3, w: 1, h: 3 },
// ]; //false

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 2, w: 10, h: 2 },
]; //false

function fitsInOneBox(boxes) {
  const orderedBoxes = boxes.sort((a, b) => a.l * a.w * a.h - b.l * b.w * b.h);

  let canFit = true;

  for (let i = 0; i < orderedBoxes.length - 1; i++) {
    if (i !== orderedBoxes.length - 1) {
      if (
        orderedBoxes[i].l >= orderedBoxes[i + 1].l ||
        orderedBoxes[i].w >= orderedBoxes[i + 1].w ||
        orderedBoxes[i].h >= orderedBoxes[i + 1].h
      ) {
        canFit = false;
      }
    }
  }

  return canFit;
}

console.log(fitsInOneBox(boxes));
