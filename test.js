'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const numberFun = function (number) {
  document.querySelector('.number').textContent = number;
};

const numberFunWidth = function (number) {
  document.querySelector('.number').style.width = number;
};

const numberFunBorder = function (number) {
  document.querySelector('.number').style.border = number;
};

const bodyBgFun = function (bodyy) {
  document.querySelector('body').style.backgroundColor = bodyy;
};

const scoreFun = function (score) {
  document.querySelector('.score').textContent = score;
};

const guessFun = function (guess) {
  document.querySelector('.guess').value = guess;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');
  } // When player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    numberFun(secretNumber);
    bodyBgFun('#60b347');
    numberFunWidth('40rem');
    numberFunBorder('5px solid black');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } // When player guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreFun(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  scoreFun(score);
  numberFun('?');
  numberFunWidth('15rem');
  numberFunBorder('');
  guessFun('');
  bodyBgFun('#00007a99');
});
