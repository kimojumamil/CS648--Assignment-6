// Prompt the user for a number
let number = parseInt(window.prompt("Enter a number to start the countdown:"), 10);

// Check if the input is a valid number
if (!isNaN(number)) {
  // Loop to count down from the number to 0
  for (let i = number; i >= 0; i--) {
    console.log(i);
    document.write(i + "<br>");
  }
} else {
  console.log("Please enter a valid number.");
  document.write("Please enter a valid number.<br>");
}
