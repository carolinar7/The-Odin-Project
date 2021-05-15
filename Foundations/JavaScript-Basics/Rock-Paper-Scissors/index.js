const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;
const MAX_TYPES = 3;

function computerPlay() {
  return Math.ceil((Math.random() * MAX_TYPES));
}

function playRound(computerChoice, playerChoice) {
  if (computerChoice == playerChoice) {
    return 'Tie!';
  } else if (computerChoice == ROCK && playerChoice == SCISSORS) {
    return 'You Lose! Rock beats Scissors';
  } else if (computerChoice == ROCK && playerChoice == PAPER) {
    return 'You Win! Paper beats Rock';
  } else if (computerChoice == PAPER && playerChoice == ROCK) {
    return 'You Lose! Paper beats Rock';
  } else if (computerChoice == PAPER && playerChoice == SCISSORS) {
    return 'You Win! Scissors beats Paper';
  } else if (computerChoice == SCISSORS && playerChoice == ROCK) {
    return 'You Win! Rock beats Scissors';
  } else {
    return 'You Lose! Scissors beats Paper';
  }
}

function printResult(str) {
  const resultDiv = document.getElementById('game-result');
  if (resultDiv.hasChildNodes()) {
    resultDiv.removeChild(resultDiv.childNodes[0]);
  }
  resultDiv.appendChild(document.createTextNode(str));
}

const rockBtn = document.getElementById('rock');
rockBtn.addEventListener('click', () => {
  printResult(playRound(computerPlay(), ROCK))
});

const paperBtn = document.getElementById('paper');
paperBtn.addEventListener('click', () => {
  printResult(playRound(computerPlay(), PAPER))
});

const scissorsBtn = document.getElementById('scissors');
scissorsBtn.addEventListener('click', () => {
  printResult(playRound(computerPlay(), SCISSORS))
});