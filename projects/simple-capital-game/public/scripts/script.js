import {countries} from './countries.js'
import graphics from './graphics.js'

/*
const body = document.getElementById('body')
let statDisplay = document.createElement('h3')
let countryDisplay = document.createElement('h1')
*/

const canvas = document.getElementById('screen')
let currentCountry //= countries[Math.floor(Math.random() * countries.length)]
let stats = { correct: 0, wrong: 0 }
const g = graphics(canvas)
const width = canvas.width
const height = canvas.height


window.onload = () => {
  /*countryDisplay.append(document.createTextNode('What is the capital of ' + currentCountry.country + '?'));
  statDisplay.append(document.createTextNode('correct: ' + stats.correct + '; incorrect: ' + stats.wrong));
  body.append(statDisplay, countryDisplay)*/
  nextQ();
}

const nextQ = () => {
  /*statDisplay.textContent = '';
  countryDisplay.textContent = '';
  statDisplay.append('correct: ' + stats.correct + '; incorrect: ' + stats.wrong);
  countryDisplay.append('What is the capital of ' + currentCountry.country + '?');*/
  g.clear();
  currentCountry = countries[Math.floor(Math.random() * countries.length)];
  g.drawText('correct: ' + stats.correct + '; incorrect: ' + stats.wrong, width/4, height/2 - 15, 'black', 18)
  g.drawText('What is the capital of ' + currentCountry.country + '?', 0, height/2+15, 'black', 22)
  
};

document.onkeydown = ((e) => {
  if ((e.key == "Enter") && (document.getElementById('answer').value != '')) {
    if (document.getElementById('answer').value === currentCountry.capital) {
      stats.correct++
    } else {
      stats.wrong++
    };
    document.getElementById('answer').value = ''
    nextQ();
  };
});
