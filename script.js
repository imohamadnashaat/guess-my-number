'use strict';

let secretNumber = generatNumber();
let score = 20;
let highScore = 0;

function generatNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.guess').style.borderColor = '#fff';

  // When there is no input
  if (!guess && score >= 1) {
    displayMessage('⛔️ No Number!');
    document.querySelector('.guess').style.borderColor = 'red';

    //When player wins
  } else if (guess === secretNumber && score > 0) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct Number');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? '🔺 Too high' : '🔻 Too low');
      score--;
      setScore(score);

      // When game is over
      if (score === 0) {
        displayMessage('👻 Game Over!');
        document.querySelector('.message').style.color = 'red';
        score = 0;
        setScore(score);
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = generatNumber();
  score = 20;

  setScore(score);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
