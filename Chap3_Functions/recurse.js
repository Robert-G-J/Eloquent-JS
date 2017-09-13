function isEven (number) {
  if (number == 0)
    return console.log(true);
  else if (number == 1)
    return console.log(false);
  else
    isEven(number - 2);
}

console.log(isEven(24));
console.log(isEven(50));
console.log(isEven(75));
