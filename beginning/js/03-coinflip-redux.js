// Step 1: Declare a variable for the coin flip
let coinFlip;

// Step 2: Create a for loop that loops 10 times
for (let i = 0; i < 10; i++) {
  // Step 3: Assign a randomly generated number to coinFlip and round it off to get 0 or 1
  coinFlip = Math.floor(Math.random() * 2);

  // Step 4: Use a conditional to check the result
  if (coinFlip === 0) {
    console.log("Heads");
    document.write("Heads<br>");
  } else {
    console.log("Tails");
    document.write("Tails<br>");
  }
}
