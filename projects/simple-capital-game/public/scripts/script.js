import { countries } from './countries.js';


let statDisplay = document.getElementById('stats');
let countryDisplay = document.getElementById('question');
let correctDisplay = document.getElementById('answers');
let hintButton = document.getElementById('hint');
let pastAnswers = [];
let hintCount = 0;
let stats = { correct: 0, wrong: 0 };

let currentCountry;

const createLi = (text) => {
  const li = document.createElement('li');
  li.append(text);
  return li;
};

window.onload = () => {
  nextQ();
};

const fillAnswer = (correct, answer) => {
  let string = `The capital of ${currentCountry.country} is ${currentCountry.capitals[0]}. ` + `(Your answer: ${answer} ${correct ? '✓' : '✗'}; Hints used: ${hintCount})`;
  pastAnswers = [string].concat(pastAnswers);
  correctDisplay.textContent = '';
  pastAnswers.forEach(e => correctDisplay.append(createLi(e)));
};

const nextQ = () => {
  statDisplay.textContent = '';
  countryDisplay.textContent = '';
  currentCountry = countries[Math.floor(Math.random() * countries.length)];
  statDisplay.append('correct: ' + stats.correct + '; incorrect: ' + stats.wrong);
  countryDisplay.append('What is the capital of ' + currentCountry.country + '?');
};

hintButton.onclick = (e) => {
  hintCount++
  if (hintCount % 2 === 1) {
    alert(`'${currentCountry.capitals[0][0]}' is the first letter of the capital you are looking for.`);
  } else if (hintCount % 2 === 0) {
    alert(`The name of the capital you are looking for is ${currentCountry.capitals[0].length} letters long (including spaces).`);
  };
};


document.onkeydown = ((e) => {
  console.log(e);
  const input = document.getElementById('answerInput').value;
  if ((e.key == "Enter") && (input != '')) {
    const maybeCorrect = currentCountry.capitals.some((e) => (input === e) || (input.toLowerCase() === e.toLowerCase()));
    if (maybeCorrect) {
      if (hintCount < 2) stats.correct++
    } else {
      stats.wrong++
    };
    document.getElementById('answerInput').value = ''
    fillAnswer(maybeCorrect, input);
    hintCount = 0;
    nextQ();
  };
});
