const SPIDERMAN = 0;
const IRONMAN = 1;
const THANOS = 2;
const MAX_TYPES = 3;
const PLAYER_WINNER = 'You win the best of 5!';
const COMPUTER_WINNER = 'You lost the best of 5 :(';
const SPIDERMAN_IMG = 'images/spiderman.jpg';
const IRONMAN_IMG = 'images/ironman.jpg';
const THANOS_IMG = 'images/thanos.jpg';
let play = true;
let playerScore = 0;
let computerScore = 0;
let imgList = [
  SPIDERMAN_IMG,
  IRONMAN_IMG,
  THANOS_IMG
]

function playerPlay(selection) {
  if (play === false) {
    return;
  }

  let computerSelection = animate();
  setTimeout(() => {
    printResult(playRound(computerSelection, selection));
    updateScores();
  }, 700);
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

function playAgain() {
  const playAgainDiv = document.getElementById('play-again');
  const playAgainBtn = document.createElement("BUTTON");
  playAgainBtn.innerHTML = 'Play Again';
  playAgainBtn.addEventListener('click', () => location.reload());
  playAgainDiv.appendChild(playAgainBtn);
}

function printResult(str) {
  const resultDiv = document.getElementById('game-result');

  if (resultDiv.hasChildNodes()) {
    resultDiv.removeChild(resultDiv.childNodes[0]);
  }

  if (playerScore === 5 || computerScore === 5) {
    str = (playerScore === 5) ? PLAYER_WINNER : COMPUTER_WINNER;
    play = false;
  }

  resultDiv.appendChild(document.createTextNode(str));

  if (play === false) {
    playAgain();
  }
}

function updateScores() {
  const playerScoreTxt = document.getElementById('player-score');
  const computerScoreTxt = document.getElementById('computer-score');
  playerScoreTxt.textContent = `Player score: ${playerScore}`;
  computerScoreTxt.textContent = `Computer score: ${computerScore}`;
}


// Spinning animation
function buildSpinItem(img) {
  return $('<img>').addClass('spin-item').attr('src', img);
}

function buildSpinConents($container, imgList) {
  $items = imgList.map(buildSpinItem);
  $container.append($items);
}

function popPushNItems ($container, n) {
  $children = $container.find('.spin-item');
  $children.slice(0, n).insertAfter($children.last());

  if (n === $children.length) {
    popPushNItems($container, 1);
  }
}

function rotateContents ($container, n) {
  setTimeout(() => {
    popPushNItems($container, n);
    $container.css({top: 0});
  }, 300);    
}

function randomSlotttIndex(max) {
  let randIndex = max - Math.ceil((Math.random() * MAX_TYPES));
  return randIndex;
}

function animate() {
  let itemIndex = randomSlotttIndex(imgList.length * 4);
  
  $itemBox.animate({top: -itemIndex*150}, 500, 'swing', () => {
    rotateContents($itemBox, itemIndex);
  });
  
  const firstImg = document.getElementsByClassName('spin-item');
  let firstImgSrc = firstImg[itemIndex].getAttribute('src');
  if (firstImgSrc === SPIDERMAN_IMG) {
    return 0;
  } else if (firstImgSrc === IRONMAN_IMG) {
    return 1;
  } else {
    return 2;
  };
}

$(() => {
  $itemBox = $('#item-box .spin-item-container');
  for (i = 0; i < 4; i++) {
    buildSpinConents($itemBox, imgList);
  }
});

const spidermanImg = document.getElementById('spiderman');
spidermanImg.addEventListener('click', () => playerPlay(SPIDERMAN));

const ironmanImg = document.getElementById('ironman');
ironmanImg.addEventListener('click', () => playerPlay(IRONMAN));

const thanosImg = document.getElementById('thanos');
thanosImg.addEventListener('click', () => playerPlay(THANOS));