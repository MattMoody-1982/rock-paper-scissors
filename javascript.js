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

  /* Prompt user to input rock, paper, or scissors */
  function getHumanChoice(rps) {
    choice = prompt();
  }
  /* Compare results */
}

(getComputerChoice(3));
(getHumanChoice(rps));