import { countries } from './countries.js'
import graphics from './graphics.js'

/*
const body = document.getElementById('body')
let statDisplay = document.createElement('h3')
let countryDisplay = document.createElement('h1')
*/

const canvasA = document.getElementById('screen')
const canvasB = document.getElementById('wrongDisp')
let currentCountry //= countries[Math.floor(Math.random() * countries.length)]
let stats = { correct: 0, wrong: 0 }
const g1 = graphics(canvasA)
const g2 = graphics(canvasB)

const getStatDisplayLength = () => ('correct: ' + stats.correct + '; incorrect: ' + stats.wrong).length
const getCountryDisplayLength = () => ('What is the capital of ' + currentCountry.country + '?').length

window.onload = () => {
  /*countryDisplay.append(document.createTextNode('What is the capital of ' + currentCountry.country + '?'));
  statDisplay.append(document.createTextNode('correct: ' + stats.correct + '; incorrect: ' + stats.wrong));
  body.append(statDisplay, countryDisplay)*/
  nextQ();
}

const fillAnswer = () => {
  g2.clear();
  const string = `The capital of ${currentCountry.country} is ${currentCountry.capital}.`
  g2.drawText(string, (g2.width - string.length * 7.5) / 2, g2.height / 2 + 7.5, 'black', 15)
}
const nextQ = () => {
  /*statDisplay.textContent = '';
  countryDisplay.textContent = '';
  statDisplay.append('correct: ' + stats.correct + '; incorrect: ' + stats.wrong);
  countryDisplay.append('What is the capital of ' + currentCountry.country + '?');*/
  g1.clear();
  currentCountry = countries[Math.floor(Math.random() * countries.length)];
  g1.drawText('correct: ' + stats.correct + '; incorrect: ' + stats.wrong, (g1.width - getStatDisplayLength() * 9) / 2, g1.height / 2 - 15, 'black', 18)
  g1.drawText('What is the capital of ' + currentCountry.country + '?', (g1.width - getCountryDisplayLength() * 11) / 2, g1.height / 2 + 15, 'black', 22)

};

document.onkeydown = ((e) => {
  if ((e.key == "Enter") && (document.getElementById('answer').value != '')) {
    if (document.getElementById('answer').value === currentCountry.capital) {
      stats.correct++
    } else {
      stats.wrong++
    };
    document.getElementById('answer').value = ''
    fillAnswer();
    nextQ();
  };
});
