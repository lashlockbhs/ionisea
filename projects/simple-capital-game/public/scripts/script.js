import {countries} from './countries.js'

const body = document.querySelector('body')
const statDisplay = document.createElement('h3')
const countryDisplay = document.createElement('h1')
let currentCountry = countries[Math.floor(Math.random() * countries.length)]
let stats = { correct: 0, wrong: 0 }

window.onload = () => body.append(statDisplay, countryDisplay)

const nextQ = () => {
  body.textContent = '';
  statDisplay.append('correct: ' + stats.correct + '; incorrect: ' + stats.wrong);
  countryDisplay.append('What is the capital of ' + currentCountry.country + '?');
  currentCountry = countries[Math.floor(Math.random() * countries.length)];
};

document.onkeydown = ((e) => {
  if (e.key == "Enter") {
    if (document.getElementById('answer').value === currentCountry.capital) {
      stats.correct++
    } else {
      stats.wrong++
    };
    nextQ();
  };
});
