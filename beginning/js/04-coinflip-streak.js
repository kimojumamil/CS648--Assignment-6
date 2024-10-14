// Step 1: Declare a variable for the coin flip
let coinFlip;
let headsCount = 0;

// Step 2: Create a do while loop
do {
  // Step 3: Assign a randomly generated number to coinFlip and round it off to get 0 or 1
  coinFlip = Math.floor(Math.random() * 2);

  // Step 4: Use a conditional to check the result
  if (coinFlip === 0) {
    console.log("Heads");
    headsCount++;
  } else {
    console.log("Tails");
  }
} while (coinFlip === 0); // Step 5: End the loop when coinFlip is Tails

console.log("Streak of Heads: " + headsCount);
document.write("Streak of Heads: " + String(headsCount));
