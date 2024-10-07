'use strict';

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function resetGame() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
}

function checkGuess() {
  let guess = Number(document.querySelector('.guess').value);

  //When input is not a number
  if (!guess) {
    displayMessage('That is not a number! 🚫');

    //When the guess is correct
  } else if (guess === secretNumber) {
    displayMessage('🥳🥳🥳 Correct Number 🥳🥳🥳');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '👆Too high!👆' : '👇 Too low!👇 ');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You are a loser! 😢');
      document.querySelector('.score').textContent = 0;
    }
  }
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.guess').value = '';

document.querySelector('.again').addEventListener('click', resetGame);

document.querySelector('.check').addEventListener('click', checkGuess);

document.addEventListener('keydown', function (a) {
  if (a.key === 'Enter') {
    checkGuess();
  } else if (a.key === 'r') {
    resetGame();
  }
});
