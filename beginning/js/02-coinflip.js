// Step 1: Create a variable for the coin flip
let coinFlip = Math.random();

// Step 2: Prompt the user to select "Heads or Tails"
let choice = window.prompt("Heads or Tails?").toLowerCase();

// Step 8: Use two Math methods to get a whole number for the coin flip (0 or 1)
coinFlip = Math.floor(coinFlip * 2); // Math.random gives a number between 0 and 1; multiply by 2 and floor it

// Step 3: Check the result using a conditional
let resultIsHeads = coinFlip === 0;

// Steps 4 to 7: Display the result based on the user's choice
if (resultIsHeads) {
  if (choice === "heads") {
    alert("The flip was heads and you chose heads...you win!");
  } else if (choice === "tails") {
    alert("The flip was heads but you chose tails...you lose!");
  } else {
    alert("Invalid choice.");
  }
} else {
  if (choice === "heads") {
    alert("The flip was tails but you chose heads...you lose!");
  } else if (choice === "tails") {
    alert("The flip was tails and you chose tails...you win!");
  } else {
    alert("Invalid choice.");
  }
}
