function getCompleted(part, total) {
  const toMiliseconds = (stringTime) => {
    return stringTime
      .split(":")
      .reverse()
      .reduce((acc, curr, i) => acc + Number(curr) * 60 ** i, 0);
  };
  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  let partSecondsTotal = toMiliseconds(part);
  let totalSecondsTotal = toMiliseconds(total);

  let mcd = gcd(partSecondsTotal, totalSecondsTotal);

  partSecondsTotal /= mcd;
  totalSecondsTotal /= mcd;

  return `${partSecondsTotal}/${totalSecondsTotal}`;
}

console.log(getCompleted("01:00:00", "03:00:00")); // '1/3'
console.log(getCompleted("02:00:00", "04:00:00")); // '1/2'
console.log(getCompleted("01:00:00", "01:00:00")); // '1/1'
console.log(getCompleted("00:10:00", "01:00:00")); // '1/6'
console.log(getCompleted("01:10:10", "03:30:30")); // '1/3'
console.log(getCompleted("03:30:30", "05:50:50")); // '3/5
