import countries from countries.js

const body = document.querySelector('body')
const correctDisplay = body.append()
let currentCountry = countries[Math.floor(Math.random() * countries.length)]
let stats = {correct: 0, wrong: 0}

const nextQ = () =>{
  body.textContent = '';

}

document.onkeydown = ((e)=>{
  if (e.key == "Enter"){
    //check for correctness
    nextQ();
  }
})
