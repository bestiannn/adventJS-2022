function checkJump(heights) {
  let max = Math.max(...heights);
  let maxIndex = heights.indexOf(max);

  if (heights.every((h) => h === max || maxIndex === heights.length - 1 || maxIndex === 0))
    return false;

  for (let i = 1; i < heights.length; i++) {
    if (i === maxIndex) {
      continue;
    }
    if (i < maxIndex && heights[i] < heights[i - 1]) {
      return false;
    }
    if (i > maxIndex && heights[i] > heights[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(checkJump([1, 3, 8, 5, 2])); // true

console.log(checkJump([1, 7, 3, 5])); // false
