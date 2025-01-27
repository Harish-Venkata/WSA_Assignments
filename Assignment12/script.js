// function firstPlayerWinCase(stones) {
//   // Special case: if there are 4 stones, the first player will lose
//   if (stones === 4) {
//     return true;
//   }
//   return stones % 4 == 0;
// }
// function playGame(stones) {
//   if (firstPlayerWinCase(stones)) {
//     alert("You friend won the game");
//   } else {
//     alert("You won the game");
//   }
// }

// let stones = Number(prompt("Enter stones:"));
// playGame(stones);

function playGame() {
  // Get initial number of stones from user
  let stones = Number(prompt("Enter stones:"));

  // Validate positive number entered
  // if (stones <= 0) {
  //   alert("Enter a positive number");
  //   return;
  // }

  // Main game loop while stones remain
  for (; stones > 0; ) {
    alert("Stones left: " + stones);

    // Player's turn - get number of stones to take
    let myMove = Number(prompt("enter the stones 1-3:"));

    // // Validate player move is 1-3 stones and not more than remaining
    // if (myMove < 1 || myMove > 3 || myMove > stones) {
    //   alert("Invalid! Take 1-3 stones");
    //   continue;
    // }

    // Remove player's stones
    stones = stones - myMove;

    // Check if player won
    if (stones === 0) {
      alert("You won the game");
      return;
    }

    // Friend's turn - calculate optimal move
    let friendMove;
    if (stones <= 3) {
      friendMove = stones; // Take all remaining if 3 or fewer
    } else {
      friendMove = stones % 4; // Take remainder when divided by 4
      if (friendMove === 0) {
        friendMove = 1; // Take 1 if remainder is 0
      }
    }

    // Remove friend's stones
    stones = stones - friendMove;
    alert("Friend takes " + friendMove + " stones");

    // Check if friend won
    if (stones === 0) {
      alert("your friend won the game");
      return;
    }

    // Check if friend forced winning position
    if (stones === 4) {
      alert("your friend won the game");
      return;
    }
  }
}

// Start the game
playGame();
