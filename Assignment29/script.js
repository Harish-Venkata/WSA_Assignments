let input = prompt("Enter the String");
let string = input.split(" ");
let maxLength = 0;
let word = [];
for (let i = 0; i < string.length; i++) {
  if (string[i].length > maxLength) {
    maxLength = string[i].length;
    word = [string[i]];
  } else if (string[i].length === maxLength) {
    word.push(string[i]);
  }
}
document.write(word.join(" "));
// console.log(maxLength);
