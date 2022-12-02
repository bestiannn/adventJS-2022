const gifts = ["book", "game", "socks", "computer", "phone"];

function wrapping(gifts) {return gifts.map(gift => {return `${"*".repeat(gift.length + 2)}\n*${gift}*\n${"*".repeat(gift.length + 2)}`})}

console.log(wrapping(gifts));
wrapping(gifts).forEach((gift) => console.log(gift));
