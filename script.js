// create a list of available options
const options = ["rock", "paper", "scissors"];

// randomly generate one of the options from the list and return it as a computer's choice
function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

/* 
prompt the user to input their choice 
reject any values other than rock, paper or scissors by promptong the user to reenter their choice
if the user gives validated input, convert it to lower case
return the user's input in lower case as player's choice 
*/
function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    const input = prompt ("Rock Paper Scissors");
    if (input == null) {
      continue;
    }
    const inputInLower = input.toLowerCase();
    if (options.includes(inputInLower)) {
      validatedInput = true;
      return inputInLower;
    }
  }
}

/* 
determine the winner of each round according to the game rules
rock beats scissors, paper beats rock and scissors beat paper
if both players throw the same object, it's a tie 
*/
function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ){
    return "Player";
  } else {
    return "Computer";
  }
}

// return the result of each round
function playRound(playerSelection, computerSelection) {
  const result = (checkWinner(playerSelection, computerSelection));
  if (result == "Player") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (result == "Computer") {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return "It's a tie!";
  }
}

/* 
continue the game for 5 rounds
initialize the player's and computer's scores to 0
increase the winners's score by 1 at the end of each round 
*/
function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (checkWinner(playerSelection, computerSelection) == "Player") {
      scorePlayer++;
    } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
      scoreComputer++;
    }
  }
  
  // compare the player's and computer's scores and announce the winner of the game
  console.log("---------------------------------");
  console.log("Game over!");
  if (scorePlayer == scoreComputer) {
    console.log("It's a tie!");
  } else if (scorePlayer > scoreComputer) {
    console.log("Player is the winner of the game!");
  } else {
    console.log("Computer is the winner of the game!");
  }
}

game();
