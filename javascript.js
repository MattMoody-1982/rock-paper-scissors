
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(3);
let humanScore = 0;
let computerScore = 0;
let round = 0;
/* Randomly return rock, paper, or scissors */
function getComputerChoice(max) {

  let rps = Math.floor(Math.random() * max);
  let result = ""
  if (rps === 0) {
    result = "Rock";
    console.log("Opponent choice " + result);
    return result;
  } else if (rps === 1) {
    result = "Paper";
    console.log("Opponent choice " + result);
    return result;
  } else {
    result = "Scissors";
    console.log("Opponent choice " + result);
    return result;
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
  } 

  switch (true) {
    /* Win conditions */
    case (humanSelection === "Rock" && computerSelection === "Scissors"):
    case (humanSelection === "Paper" && computerSelection === "Rock"):
    case (humanSelection === "Scissors" && computerSelection === "Paper"):
      ++humanScore;
      return `You win! ${humanSelection} beats ${computerSelection}.`;

    /* Lose conditions */
    case (humanSelection === "Rock" && computerSelection === "Paper"):
    case (humanSelection === "Paper" && computerSelection === "Scissors"):
    case (humanSelection === "Scissors" && computerSelection === "Rock"):
      ++computerScore;
      return `You lose! ${computerSelection} beats ${humanSelection}.`;

    default: 
      return "Invalid input. Please choose rock, paper, or scissors.";
  }
}

/* function playGame() {
  let done = false;
  While (!done) {
  getComputerChoice();
  getHumanChoice();
  }
}
*/ 
/* playGame(); */

function playGame() {
    ++round;
    console.log("Round " + round);
    console.log(playRound(humanSelection, computerSelection));
    console.log (`Your score is ${humanScore}.  Their score is ${computerScore}.`)

    ++round;
    console.log("Round " + round);
    getHumanChoice();
    getComputerChoice(3);
    console.log(playRound(humanSelection, computerSelection));
    console.log (`Your score is ${humanScore}.  Their score is ${computerScore}.`) 

    ++round;
    console.log("Round " + round);
    getHumanChoice();
    getComputerChoice(3);
    console.log(playRound(humanSelection, computerSelection));
    console.log (`Your score is ${humanScore}.  Their score is ${computerScore}.`) 

    ++round;
    console.log("Round " + round);
    getHumanChoice();
    getComputerChoice(3);
    console.log(playRound(humanSelection, computerSelection));
    console.log (`Your score is ${humanScore}.  Their score is ${computerScore}.`) 

    ++round;
    console.log("Round " + round);
    getHumanChoice();
    getComputerChoice(3);
    console.log(playRound(humanSelection, computerSelection));
    console.log (`Your score is ${humanScore}.  Their score is ${computerScore}.`) 
}

playGame();
/* Announce winner */
