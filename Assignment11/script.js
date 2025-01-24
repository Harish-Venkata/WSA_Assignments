let n = 100;
for (let num = 1; num <= n; num++) {
  if (num % 3 === 0) {
    document.write("Fizz,");
  } else if (num % 5 === 0) {
    document.write("Buzz,");
  } else if (num % 3 === 0 && num % 5 === 0) {
    document.write("FizzBuzz");
  } else {
    document.write(` ${num}, `);
  }
}
