let string = prompt("enter the string");
let word = string.split(" ");

for (i = 0; i < word.length; i++) {
  word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase();
}
let result = word.join(" ");
document.write(result);
