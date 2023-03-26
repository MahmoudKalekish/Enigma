// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 5) + 1;


// Get references to the form elements
const form = document.querySelector("form");
const guessInput = document.querySelector("#guess");
const submitButton = document.querySelector("#submit");
const result = document.querySelector("#result");

// Handle form submission
submitButton.addEventListener("click", event => {
  event.preventDefault();
  checkGuess();
});

function checkGuess() {
  // Get the user's guess
  const guess = guessInput.value;

  // Check if the guess is correct
if (guess == targetNumber) {
  result.textContent = "Congratulations! You guessed the number!";
  submitButton.disabled = true;
  } else if (guess > targetNumber) {
  result.textContent = "Your guess is high. Try again.";
  } else {
  result.textContent = "Your guess is low. Try again.";
  }
  }