import { countries } from './countries.js'
import graphics from './graphics.js'


const body = document.body
let statDisplay = document.getElementById('stats')
let countryDisplay = document.getElementById('question')
let correctDisplay = document.getElementById('answers')
let pastAnswers = []

//const canvasA = document.getElementById('screen')
//const canvasB = document.getElementById('answers')
let currentCountry = countries[Math.floor(Math.random() * countries.length)]
let stats = { correct: 0, wrong: 0 }
//const g1 = graphics(canvasA)
//const g2 = graphics(canvasB)

const createLi = (text) => {
  const li = document.createElement('li')
  li.append(text)
  return li
}

//const getStatDisplayLength = () => ('correct: ' + stats.correct + '; incorrect: ' + stats.wrong).length
//const getCountryDisplayLength = () => ('What is the capital of ' + currentCountry.country + '?').length

window.onload = () => {
  /*countryDisplay.append(document.createTextNode('What is the capital of ' + currentCountry.country + '?'));
  statDisplay.append(document.createTextNode('correct: ' + stats.correct + '; incorrect: ' + stats.wrong));
  body.append(statDisplay, countryDisplay)*/
  nextQ();
}

const fillAnswer = (wrongcaps, correct, answer) => {
  let string = `The capital of ${currentCountry.country} is ${currentCountry.capital}. ` + `(your answer: ${answer} ${correct ? '✓' : '✗'})`
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
  //g1.clear();
  //g1.drawText('correct: ' + stats.correct + '; incorrect: ' + stats.wrong, (g1.width - getStatDisplayLength() * 9) / 2, g1.height / 2 - 15, 'black', 18)
  // g1.drawText(`What is the capital of ${currentCountry.country}?`, (g1.width - getCountryDisplayLength() * 11) / 2, g1.height / 2 + 15, 'black', 22)
};

document.onkeydown = ((e) => {
  const input = document.getElementById('answerInput').value;
  const maybeCorrect = input === currentCountry.capital;
  if ((e.key == "Enter") && (input != '')) {
    if (maybeCorrect) {
      stats.correct++
    } else {
      stats.wrong++
    };
    document.getElementById('answerInput').value = ''
    fillAnswer((!maybeCorrect && (input.toLowerCase() === currentCountry.capital.toLowerCase())), maybeCorrect, input);
    nextQ();
  };
});
