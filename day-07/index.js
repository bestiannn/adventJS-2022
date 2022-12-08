const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];

function getGiftsToRefill(a1, a2, a3) {
  return [...new Set([...a1, ...a2, ...a3])].map((gift) => {
    if (
      (!a1.includes(gift) && !a2.includes(gift)) ||
      (!a2.includes(gift) && !a3.includes(gift)) ||
      (!a1.includes(gift) && !a3.includes(gift))
    ) {
      // console.log(gift);
      return gift;
    }
  }).filter(Boolean);
}

const gifts = getGiftsToRefill(a1, a2, a3); // ['muñeca', 'pc']
console.log(gifts);
