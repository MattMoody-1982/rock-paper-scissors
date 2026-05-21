
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice(3);

let round = 0;

/* Randomly return rock, paper, or scissors */
function getComputerChoice(max) {
  let rps = Math.floor(Math.random() * max);
  switch (true) {
    case (rps === 0):   
      return "Rock";
    case (rps === 1):  
      return "Paper";
    case (rps === 2):
      return "Scissors";
  }  
}

/* Prompt user to input rock, paper, or scissors */
function getHumanChoice() { 
  let choice = prompt("Rock, Paper, or Scissors?");
  /*  Make choice case-insensitive */
  choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  /* Compare choices */
  function playRound(computerChoice, humanChoice) {
    if (computerSelection === humanSelection) {
      return ("Round was a draw!");
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

  ++round
  console.log("Round " + round);
  console.log (`You chose ${humanSelection}.`);
  console.log (`Opponent chose ${computerSelection}.`);
  console.log(playRound(humanSelection, computerSelection));
  console.log (`Your score is ${humanScore}.  Their score is ${computerScore}.`)
  

  for (i = 2; i <= 5; ++i) {
  ++round
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice(3);
  console.log("Round " + round);
  console.log (`You chose ${humanSelection}.`);
  console.log (`Opponent chose ${computerSelection}.`);
  console.log(playRound());
  console.log (`Your score is ${humanScore}.  Their score is ${computerScore}.`)
  } 
  if (humanScore === computerScore) {
    console.log ("You tied!");
  } else if (humanScore > computerScore) { 
    console.log ("You won!");
  } else {
    console.log ("Your opponent won!");
  }
}
  

playGame();
/* Announce winner */
