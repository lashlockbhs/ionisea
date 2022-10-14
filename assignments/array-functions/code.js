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
  const evensArray= [];
  for (let pos = 0; pos < array.length; pos += 1){
    if (array[pos]/2 == Math.floor(array[pos])/2){
      evensArray.push(array[pos])
    }
  }
  return numEvens
}