const countTens = (array) =>{
  let numOfTens = 0;
  for (const element of array){
    if (element == 10) numOfTens += 1;
  }
  return numOfTens
}

const sum = (array) => {
  let total = 0;
  for(const element of array){
    total += element
  }
  return total
}

const evens = (array) =>{
  const evensArray = [];
  for (const element of array){
    if (element%2 ==0) evensArray.push(element);
  }
  return evensArray
}
const anyOverOneHundred = (array) =>{
  return array.find(element => element > 100) != undefined
}
const pyramid = (int) => {
 const array = [];
 for (let pos = 1; pos <= int; pos++){
   for (let ipos = 1; ipos <= pos; ipos++){
   array.push(pos)
 }}
 return array
}
