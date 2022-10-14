const countTens = (array) =>{
  let numOfTens = 0;
  for (let pos = 0; pos < array.length; pos += 1){
    array[pos] == 10 ? numOfTens += 1:numOfTens;
  }
  return numOfTens
}

const sum = (array) => {
  let total = 0;
  for(let pos = 0; pos < array.length; pos += 1){
    total += array[pos]
  }
  return total
}

const evens = (array) =>{
  let numEvens = 0;
  for (let pos = 0; pos < array.length; pos += 1){
    array[pos] == (Math.floor(array[pos])/2)*2 ? numOfTens += 1:numOfTens;
  }
  return numEvens
}