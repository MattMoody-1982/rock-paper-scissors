const humanSelection = getHumanChoice(3);
const computerSelection = getComputerChoice();

/* Randomly return rock, paper, or scissors */
function getComputerChoice(max) {
  let result = ""
  let rps = Math.floor(Math.random() * max);
  if (rps === 0) {
    result = "Rock";
    console.log(result);
  } else if (rps === 1) {
    result = "Paper";
    console.log(result);
  } else if (rps === 2) {
    result = "Scissors";
    console.log(result);
  } else {
    return;
  }
}
  /* Prompt user to input rock, paper, or scissors */
function getHumanChoice() { 
  let choice = prompt("Rock, Paper, or Scissors?");
  /*  Make choice case-insensitive */
  if (choice === null) {
    choice = prompt("Rock, Paper, or Scissors?"); 
  }
}
  /* Compare choices */
  playRound(ComputerChoice, humanChoice) {

  }
  /* Keep Score/increment */
  function humanScore() {
    let score = 0;
  }
  function computerScore() {
    let score = 0;
  }
 /* Announce winner */

