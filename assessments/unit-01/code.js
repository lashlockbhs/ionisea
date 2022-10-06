// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

// Write your code here ...
const averageWeight=(weight, num)=>{
  return weight/num
}
averageWeight(40,8);

const hypotenuse = (a,b) =>{
  return Math.sqrt(a**2+b**2)
}
hypotenuse();

const maxRadius=(width,height)=>{
  return (Math.min(width,height))/2
}
maxRadius();

const numCircles=(radius,width)=>{
  return Math.floor(width/(radius*2))
}
numCircles(20, 500);

const offset = (cWidth, fWidth) =>{
  return (cWidth-fWidth)/2
}

const canSleepIn = (weekday, vacation) =>{
  return (!weekday || vacation)
}
canSleepIn(false,false);

const canGoToProm =(senior, invitedBySenior, onExcList) =>{
  return ((senior || invitedBySenior) && !onExcList)
}
canGoToProm(true, false, true);

const getsSpeedingTicket=(speed, grouchyCop) =>{
  return (((speed > 65)&& grouchyCop) || speed > 70)
}
getsSpeedingTicket(66, true);

const moreThanTwiceAsLong = (string1,string2) => {
  return (string1.length > string2.length * 2)
}

const aFartherThanB = (a,b,c) =>{
return Math.abs(c-a) > Math.abs (c-b);
}
aFartherThanB(0,2,15);

const firstHalf = (string) => {
  return string.substring(0,Math.floor(string.length/2))
}
firstHalf('howisyourday');

const secondHalf = (string) => {
  return string.substring(Math.floor(string.length/2))
}
secondHalf('wowitworkssick');

const upDown = (string) =>{
  return string.toUpperCase()+string
}
upDown('insertusfulmessagehere');

const everyOther=(string)=>{
  return string[0]+string[2]+string[4] //just the 1st, 3rd, and 5th
}
everyOther('woahcoolitworks');

const upDownLastCharacter = (string) =>{
  return string[string.length-1].toUpperCase()+string[string.length-1]
}
upDownLastCharacter('ohmanihavelotsofideasforthesestrings');

const yesIfEven=(num)=>{
  if (num/2 == Math.floor(num/2)){
  return 'yes'
  } else {
    return 'no'
  }
}
yesIfEven(64);

const countXs = (string) => { // <- ran out of time here
  return console.log(string.search[/x/])
}
countXs('dbxxxxxenof');