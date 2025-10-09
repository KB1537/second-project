// Select elements
const levelButtons = document.querySelectorAll('.controls button[data-type]');
const submitButton = document.querySelector('.btn--grey');
const answerBox = document.getElementById('answer-box');
const lowGuess = document.getElementById('low-guess');
const highGuess = document.getElementById('high-guess');
const correctScoreEl = document.getElementById('score');
const incorrectScoreEl = document.getElementById('Incorrect-score');

let targetNumber = 0;
let maxNumber = 0;
let correctScore = 0;
let incorrectScore = 0;

// Disable input and submit until level is picked
answerBox.disabled = true;
submitButton.disabled = true;

// Level selection
levelButtons.forEach((btn) => {
    const level = btn.getAttribute('data-type');

    // Skip Submit button 
    if (level === 'Submit') return;

    btn.addEventListener('click', () => {
        let customValue;

        switch (level) {
            case 'Easy':
                maxNumber = 5;
                break;
            case 'Medium':
                maxNumber = 15;
                break;
            case 'Hard':
                maxNumber = 25;
                break;
            case 'Custom':
                customValue = parseInt(prompt('Enter your own max number:'));
                if (isNaN(customValue) || customValue < 1) {
                    alert('Please enter a valid number greater than 0.');
                    return;
                }
                maxNumber = customValue;
                break;
        }
        // Generate target number and update text
        targetNumber = Math.floor(Math.random() * maxNumber) + 1;
        lowGuess.textContent = 'Guess a number between 1';
        highGuess.textContent = maxNumber;

        // Enable input and submit
        answerBox.disabled = false;
        submitButton.disabled = false;
        answerBox.value = '';
        answerBox.focus();

        console.log('(Debug) Target:', targetNumber); // for testing
    });
});

// Submitting guess
submitButton.addEventListener('click', () => {
  const guess = parseInt(answerBox.value);

  if (isNaN(guess) || guess < 1 || guess > maxNumber) {
    alert(`Please enter a number between 1 and ${maxNumber}.`);
    return;
  }

  if (guess === targetNumber) {
    correctScore++;
    correctScoreEl.textContent = correctScore;
    alert('🎉 Correct! You guessed the number!');
    resetGame();
  } else {
    incorrectScore++;
    incorrectScoreEl.textContent = incorrectScore;
    giveHint(guess);
  }
});