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

