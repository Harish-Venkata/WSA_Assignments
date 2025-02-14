let input = prompt("enter the word");
let string = input.split("");

document.write(`string:${string}` + "<br>");

let positions = prompt("enter the position");

let position = positions.split("");
document.write(`position:${position}` + "<br>");

let arr = [];

for (let i = 0; i < position.length; i++) {
  arr.push(string[position[i]]);
}

let result = arr.join("");
document.write(result);
