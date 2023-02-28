const selectionButtons = document.querySelectorAll('[data-selection]');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const playerScoreSpan = document.querySelector('[data-player-score]');
const selections = ["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    playerSelection = selectionButton.dataset.selection;
    computerSelection = randomSelection();
    checkWinner();
  });
});

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * selections.length);
  return selections[randomIndex];
}

function checkWinner() {
  let result = "";
  if (playerSelection == computerSelection) {
    result = "It's a tie!";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ){
    incrementScore(playerScoreSpan);
    result = `You Win! ${playerSelection} beats ${computerSelection}`;
    if(playerScoreSpan.innerText == 5) {
      result = 'Game over! You won the game!';
    }
  } else {
    incrementScore(computerScoreSpan);
    result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    if(playerScoreSpan.innerText == 5) {
      result = 'Game over! Computer won the game!';
    }
  } 
  document.getElementById('results').innerHTML = result;
  return;
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}