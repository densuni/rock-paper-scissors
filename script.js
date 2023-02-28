const selectionButtons = document.querySelectorAll('[data-selection]');
const selections = ["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    playerSelection = selectionButton.dataset.selection;
    console.log(playerSelection);
    computerSelection = randomSelection();
    console.log(computerSelection);
    const result = checkWinner();
    console.log(result);
  });
});

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * selections.length);
  return selections[randomIndex];
}

function checkWinner() {
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
