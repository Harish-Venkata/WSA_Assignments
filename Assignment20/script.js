function uniqueDigit(n) {
  let uniqueNumber = "";
  for (let i = 0; i < n; i++) {
    uniqueNumber += Math.floor(Math.random() * 10);
  }

  return uniqueNumber;
}
let digit = +prompt("enter the length of digit:");
document.write(uniqueDigit(digit));
