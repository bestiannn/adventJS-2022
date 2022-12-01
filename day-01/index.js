const gifts = ["book", "game", "socks", "computer", "phone"];

function wrapping(gifts) {
  const wrappingGifts = () => {
    return gifts.map((gift) => {
      const wrappingLength = "*".repeat(gift.length + 2);

      return `${wrappingLength}\n*${gift}*\n${wrappingLength}`;
    });
  };

  return wrappingGifts(gifts);
}

console.log(wrapping(gifts));
wrapping(gifts).forEach((gift) => console.log(gift));
