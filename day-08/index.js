function checkPart(part) {
  const isPalindrome = (part) => part === [...part].reverse().join("");

  if (isPalindrome(part)) return true;

  for (let i = 0; i < part.length; i++) {
    let newPart = part.substring(0, i) + part.substring(i + 1);
    if (isPalindrome(newPart)) {
      return true;
    }
  }
  return false;
}

console.log(checkPart("uwu")); // true
// "uwu" es un palíndromo sin eliminar ningún carácter

console.log(checkPart("miidim")); // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

console.log(checkPart("midu")); // false
// "midu" no puede ser un palíndromo después de eliminar un carácter

console.log(checkPart("zzzoonzzz")); // false
