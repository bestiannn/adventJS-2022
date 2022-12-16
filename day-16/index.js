function fixLetter(letter) {
  return letter
    .replace(/([,.?!])([^,.?!])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .replace(/([,.?!]{2,})/g, ($1) => $1[0])
    .replace(
      /([.?!])(\s)([A-z])/g,
      (_, $1, $2, $3) => $1 + $2 + $3.toUpperCase()
    )
    .replace(/(santa claus)/gi, "Santa Claus")
    .trim()
    .replace(/\s([,.?!])/g, "$1")
    .replace(/^([A-z])/g, ($1) => $1.toUpperCase())
    .replace(/([^.?!])$/g, "$1.");
}

console.log(
  fixLetter(
    ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `
  )
); // Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

console.log("--------------------");

console.log(
  fixLetter(
    "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"
  )
); // Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?
