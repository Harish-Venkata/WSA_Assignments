let str = prompt("Enter the word");
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (
    (str[i] === "a") |
    (str[i] === "e") |
    (str[i] === "i") |
    (str[i] === "o") |
    (str[i] === "u")
  ) {
    count++;
  }
}
document.write(`number of vowels: ${count}`);
