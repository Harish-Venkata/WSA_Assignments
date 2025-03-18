let input = prompt("Enter a text/number");

function checkPalindrome(input) {
  // let str = input.toString().toLowerCase();
  // let reverseString = str.split("").reverse().join("");
  let reverseString = input.split("").reverse().join("");
  // if(str=== reverseString)
  if (input === reverseString) {
    alert("palindrome");
  } else {
    alert("not palindrome");
  }
}
checkPalindrome(input);
