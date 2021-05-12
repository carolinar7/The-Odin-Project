const ROCK = 1;
const ROCK_STRING = "rock";
const PAPER = 2;
const PAPER_STRING = "paper";
const SCISSORS = 3;
const SCISSORS_STRING = "scissors";
const MAX_TYPES = 3;

function computerPlay() {
  return Math.ceil((Math.random() * MAX_TYPES));
}

function playerPlay(playerChoice = "") {
  while (true) {
    playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    switch(playerChoice) {
      case ROCK_STRING:
        return ROCK;
      case PAPER_STRING:
        return PAPER;
      case SCISSORS_STRING:
        return SCISSORS;
      default:
        console.log("Invalid input: Please enter Rock, Paper, or Scissors");
    }
  }
}

function playRound(computerChoice, playerChoice) {
  if (computerChoice == playerChoice) {
    return "Tie!";
  } else if (computerChoice == ROCK && playerChoice == SCISSORS) {
    return "You Lose! Rock beats Scissors";
  } else if (computerChoice == ROCK && playerChoice == PAPER) {
    return "You Win! Paper beats Rock";
  } else if (computerChoice == PAPER && playerChoice == ROCK) {
    return "You Lose! Paper beats Rock";
  } else if (computerChoice == PAPER && playerChoice == SCISSORS) {
    return "You Win! Scissors beats Paper";
  } else if (computerChoice == SCISSORS && playerChoice == ROCK) {
    return "You Win! Rock beats Scissors";
  } else {
    return "You Lose! Scissors beats Paper";
  }
}

function game(ROUNDS = 5) {
  for (let i = 0; i < ROUNDS; i++) {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    console.log(playRound(computerSelection, playerSelection));
    
  }
}

game();