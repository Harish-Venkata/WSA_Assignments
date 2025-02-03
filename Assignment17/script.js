let word = prompt("Enter the string:");
function swapCase(word) {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    let move = word[i];
    if (move === move.toUpperCase()) {
      result = result + move.toLowerCase();
    } else {
      result = result + move.toUpperCase();
    }
  }
  return result;
}
document.write(swapCase(word));
