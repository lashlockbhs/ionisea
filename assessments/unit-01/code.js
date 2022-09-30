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
  return Math.sqrt(a^2+b^2)
}
hypotenuse();

const maxRadius=(width,height)=>{
  return (Math.min(width,height))/2
}
maxRadius();

const numCircles=(radius,width)=>{
  return Math.floor(width/(radius*2))
}
numCircles();

const offset = (cWidth, fWidth) =>{
  return (cWidth-fWidth)/2
}
offset();

const canSleepIn = (weekday, vacation) =>{
  if (!weekday || vacation){
    return true //is this supposed to be in console log or no
  } else {
    return false
  }
}
canSleepIn(false,false);

const canGoToProm =(senior, invitedBySenior, onExcList) =>{
  if((senior || invitedBySenior) && !onExcList){
    return true
  } else {
    return false
  }
}
canGoToProm(true, false, true);

const getsSpeedingTicket=(speed, grouchyCop) =>{
  if (((speed > 65)&& grouchyCop) || speed > 70){
    return true
  } else {
    return false
  }
}
getsSpeedingTicket(66, true)

const moreThanTwiceAsLong = (string1,string2) => {
  if (string1.length > string2.length){
    return console.log('2')
  } else {
    return console.log('3')
  }
}
moreThanTwiceAsLong('imanidiotitsastring', 'howcouldImessthisup')