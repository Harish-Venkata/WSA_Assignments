let n = +prompt("Enter a Number");

function fibonnaciNumbers(n) {
  let input = [0, 1];
  for (i = 2; i < n; i++) {
    input.push(input[i - 1] + input[i - 2]);
  }
  return input;
}
document.write(fibonnaciNumbers(n));
