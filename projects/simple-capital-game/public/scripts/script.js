import { countries } from './countries.js'


let statDisplay = document.getElementById('stats')
let countryDisplay = document.getElementById('question')
let correctDisplay = document.getElementById('answers')
let pastAnswers = []
let stats = { correct: 0, wrong: 0 }

let currentCountry //= countries[Math.floor(Math.random() * countries.length)]

const createLi = (text) => {
  const li = document.createElement('li')
  li.append(text)
  return li
}

window.onload = () => {
  nextQ();
}

const fillAnswer = (wrongcaps, correct, answer) => {
  let string = `The capital of ${currentCountry.country} is ${currentCountry.capitals[0]}. ` + `(Your answer: ${answer} ${correct ? '✓' : '✗'}${wrongcaps ? ' - Incorrect case)' : ')'}`
  pastAnswers = [string].concat(pastAnswers)
  correctDisplay.textContent = ''
  pastAnswers.forEach(e => { correctDisplay.append(createLi(e)) })
}

const nextQ = () => {
  statDisplay.textContent = '';
  countryDisplay.textContent = '';
  currentCountry = countries[Math.floor(Math.random() * countries.length)];
  statDisplay.append('correct: ' + stats.correct + '; incorrect: ' + stats.wrong);
  countryDisplay.append('What is the capital of ' + currentCountry.country + '?');
};

document.onkeydown = ((e) => {
  const input = document.getElementById('answerInput').value;
  const maybeCorrect = currentCountry.capitals.some((e) => input === e);
  if ((e.key == "Enter") && (input != '')) {
    if (maybeCorrect) {
      stats.correct++
    } else {
      stats.wrong++
    };
    document.getElementById('answerInput').value = ''
    fillAnswer((!maybeCorrect && (currentCountry.capitals.some((e) => input.toLowerCase() === e.toLowerCase()))), maybeCorrect, input);
    nextQ();
  };
});
