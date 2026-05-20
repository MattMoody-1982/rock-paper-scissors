
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(3);
let humanScore = 0;
let computerScore = 0;
/* Randomly return rock, paper, or scissors */
function getComputerChoice(max) {
  let result = ""
  let rps = Math.floor(Math.random() * max);
  if (rps === 0) {
    result = "Rock";
    return result;
  } else if (rps === 1) {
    result = "Paper";
    return result;
  } else if (rps === 2) {
    result = "Scissors";
    return result;
  } else {
    return;
  }
}

/* Prompt user to input rock, paper, or scissors */
function getHumanChoice() { 
  let choice = prompt("Rock, Paper, or Scissors?");
  /*  Make choice case-insensitive */
  choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
  return choice;
}

/* Compare choices */
function playRound(computerChoice, humanChoice) {
  if (computerSelection === humanSelection) {
    console.log("Round was a draw!");
  } else if (computerSelection === "Rock" && humanSelection === "Paper") {
    console.log("You win! Paper beats Rock.");
    ++humanScore;
  } else if (computerSelection === "Rock" && humanSelection === "Scissors") {
    console.log("You lose! Rock beats Scissors.")
    ++computerScore;
  } else if (computerSelection === "Paper" && humanSelection === "Scissors") {
    console.log ("You win! Scissors beat Rock.") 
    ++humanScore;
  } else if (computerSelection === "Paper" && humanSelection === "Rock") {
    console.log ("You lose! Paper beat Rock.")
    ++computerScore;
  } else if (computerSelection === "Scissors" && humanSelection === "Rock") {
    console.log ("You win! Scissors beat Paper")
    ++humanScore;
  } else if (computerSelection === "Scissors" && humanSelection === "Paper") {
    console.log ("You lose! Scissors beat Paper")
  } else {
    getHumanChoice();
  }
}

playRound();
/* Announce winner */

console.log(computerSelection);
console.log(humanSelection);