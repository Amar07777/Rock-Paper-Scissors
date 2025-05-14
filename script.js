const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultMessage = document.getElementById('result-message');
const choices = document.querySelectorAll('.choice');
const resetButton = document.getElementById('reset');

let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function convertToWord(choice) {
  if (choice === 'rock') return 'Rock';
  if (choice === 'paper') return 'Paper';
  return 'Scissors';
}

function win(userChoice, computerChoice) {
  userScore++;
  userScoreSpan.textContent = userScore;
  resultMessage.textContent = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScoreSpan.textContent = computerScore;
  resultMessage.textContent = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}. You lose!`;
}

function draw(userChoice, computerChoice) {
  resultMessage.textContent = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw!`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  if (userChoice === computerChoice) {
    draw(userChoice, computerChoice);
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    win(userChoice, computerChoice);
  } else {
    lose(userChoice, computerChoice);
  }
}

choices.forEach(choice => {
  choice.addEventListener('click', () => game(choice.id));
});

resetButton.addEventListener('click', () => {
  userScore = 0;
  computerScore = 0;
  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
  resultMessage.textContent = 'Make your move!';
});
