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
hypotenuse(a,b);

const maxRadius=(width,height)=>{
  return 1/2(Math.min(width,height))
}
maxRadius(width,height);

const numCircles=(radius,width)=>{
  return Math.floor(width/(radius*2))
}
numCircles(radius, width);

const offset = (cWidth, fWidth) =>{
  return 1/2(cWidth-fWidth)
}
offset(cWidth,fWidth);

const canSleepIn = (weekday, vacation) =>{
  if (!weekday || vacation){
    return true
  } else {
    return false
  }
}
canSleepIn(weekday,vacation);

const canGoToProm =(senior, invitedBySenior, onExcList) =>{
  if(senior || invitedBySenior && !onExcList){
    
  }
}