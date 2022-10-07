// Some constants you will need. No need to do anything to these
const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const itemsLeftOver = (people, items) => {
   // return items - (Math.floor(items/people)) * people //ignore, just wanted to test this
   return items%people
}

const areaOfCircle = (r) => {
  return Math.PI * r ** 2
}

const volumeOfCube = (edgeLength) => {
  return edgeLength ** 3
}

const populationGrowth = (initPop, growthRate) => {
  return initPop + initPop * growthRate
}

const earnedRunAverage = (earnedRuns, inningsPitched) =>{
  return (earnedRuns/inningsPitched) * 9 // dont know baseball, will return to if i have time
}

const valueOfJewels = (numDiamonds, numEmeralds, diamondValue, emeraldValue) => {
  return (numDiamonds * diamondValue) + (numEmeralds * emeraldValue)
}

const payWithOvertime = (hoursWorked, normRate, otRate) => { 
  return hoursWorked > 8 ? 8*normRate + (hoursWorked-8) * otRate : normRate*hoursWorked
}

const firstClassPostage = (weight) =>{
  return 60 + 24 * Math.ceil(weight-1)
}

const weightOnJupiter = (earthWeight) => {
  //return earthWeight * (JUPITER_GRAVITY / EARTH_GRAVITY)
  return earthWeight / EARTH_GRAVITY * JUPITER_GRAVITY
}