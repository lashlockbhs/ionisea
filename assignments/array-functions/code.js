const countTens = (array) =>{
  let numOfTens = 0;
  for (let pos = 0; pos < array.length; pos += 1){
    if (array[pos] == 10){
      numOfTens += 1
    }
  }
  return numOfTens
}
const array = [5,5,5,5,5]