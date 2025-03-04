let string = prompt("Enter a string");

// let string = input.split("").reverse().join("");

// document.write(string);

let reverseString = "";

for (let i = 0; i < string.length; i++) {
  reverseString = string[i] + reverseString;
}
document.write(reverseString);
