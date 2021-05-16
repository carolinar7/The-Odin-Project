const SPIDERMAN = 1;
const IRONMAN = 2;
const THANOS = 3;
const MAX_TYPES = 3;
var playerScore = 0;
var computerScore = 0;

function computerPlay() {
  return Math.ceil((Math.random() * MAX_TYPES));
}

function playRound(computerChoice, playerChoice) {
  if (computerChoice == playerChoice) {
    return 'Tie!';
  } else if (computerChoice == SPIDERMAN && playerChoice == THANOS) {
    playerScore += 1;
    return 'You Win! Thanos beats Spider-Man';
  } else if (computerChoice == SPIDERMAN && playerChoice == IRONMAN) {
    computerScore += 1;
    return 'You Lose! Spider-Man beats Iron Man';
  } else if (computerChoice == IRONMAN && playerChoice == SPIDERMAN) {
    playerScore += 1;
    return 'You Win! Spider-Man beats Iron Man';
  } else if (computerChoice == IRONMAN && playerChoice == THANOS) {
    computerScore += 1;
    return 'You Lose! Iron Man beats Thanos';
  } else if (computerChoice == THANOS && playerChoice == SPIDERMAN) {
    computerScore += 1;
    return 'You Lose! Thanos beats Spider-Man';
  } else {
    playerScore += 1;
    return 'You Win! Iron Man beats Thanos';
  }
}

function printResult(str) {
  const resultDiv = document.getElementById('game-result');
  if (resultDiv.hasChildNodes()) {
    resultDiv.removeChild(resultDiv.childNodes[0]);
  }
  resultDiv.appendChild(document.createTextNode(str));
}

function updateScores() {
  const playerScoreTxt = document.getElementById('player-score');
  const computerScoreTxt = document.getElementById('computer-score');
  playerScoreTxt.textContent = `Player score: ${playerScore}`;
  computerScoreTxt.textContent = `Computer score: ${computerScore}`;
}

const spidermanImg = document.getElementById('spiderman');
spidermanImg.addEventListener('click', () => {
  printResult(playRound(computerPlay(), SPIDERMAN))
  updateScores();
});

const ironmanImg = document.getElementById('ironman');
ironmanImg.addEventListener('click', () => {
  printResult(playRound(computerPlay(), IRONMAN))
  updateScores();
});

const thanosImg = document.getElementById('thanos');
thanosImg.addEventListener('click', () => {
  printResult(playRound(computerPlay(), THANOS))
  updateScores();
});