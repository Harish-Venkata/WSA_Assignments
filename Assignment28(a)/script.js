// let str = prompt("Enter the string");
// let position = +prompt("Enter the position");
// let character = +prompt("Enter the no. of characters needed");

// function removeCharacters(str, position, character) {
//   let before = str.slice(0, position);
//   let after = str.slice(position + character);

//   return before + after;
// }

// console.log(removeCharacters(str, position, character));

let string = prompt("Enter the string");
let position = +prompt("Enter the position");
let numChar = +prompt("Number of characters");

let output = "";

for (let i = 0; i < string.length; i++) {
  if (i < position || i >= position + numChar) {
    output += string[i];
  }
}

console.log(output);
