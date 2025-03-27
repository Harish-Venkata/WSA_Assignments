let input = prompt("enter a string");
let words = input.split(" ");
for (i = 0; i < words.length; i++) {
  words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
}
let result = words.join(" ");
document.write(result);
