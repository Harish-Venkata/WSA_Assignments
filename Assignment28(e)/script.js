// let str1 = prompt("Enter the first string (String1):"); // Example: "Hi how are you?"
// let str2 = prompt("Enter the second string to insert (String2):"); // Example: "Good morning"
// let position = +prompt("Enter the position to insert the second string:");

// function insertString(str1, str2, position) {
//     // Slice the first string into two parts and insert the second string in between
//     let before = str1.slice(0, position);  // Part before the position
//     let after = str1.slice(position);      // Part after the position

//     return before + str2 + after;         // Combine parts with the second string
// }

// let result = insertString(str1, str2, position);
// console.log("Modified string:", result);  // Output the result

let string1 = prompt("enter the string1");
let string2 = prompt("enter the string2");
let position = +prompt("enter the position");
// for (let i = 0; i < string1.length; i++) {
//   for (let j = 0; j < string2.length; j++) {
//     string = string1 + " " + string2;
//   }
// }
// document.write(string);

let result = "";

for (let i = 0; i < position; i++) {
  result += string1[i];
}

result += string2;

for (i = position; i < string1.length; i++) {
  result += string1[i];
}

console.log(result);
