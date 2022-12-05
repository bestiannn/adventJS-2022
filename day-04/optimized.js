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

// 170 puntos
function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => a.l * a.w * a.h - b.l * b.w * b.h)
    .every((box, index, orderedBoxes) => {
      if (index === orderedBoxes.length - 1) return true;
      return (
        box.l < orderedBoxes[index + 1].l &&
        box.w < orderedBoxes[index + 1].w &&
        box.h < orderedBoxes[index + 1].h
      );
    });
}

console.log(fitsInOneBox(boxes));
