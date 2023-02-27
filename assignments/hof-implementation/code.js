// N.B. Do not use the array methods of the same name to implement these functions!

const filter = (condition, array) => {
  const filtered = []
  for (const element of array) {
    if (condition(element)) {
      filtered.push(element)
    }
  }
  return filtered
};

const map = (fn, array) => {
  const mapped = []
  for (const element of array) {
   mapped.push(fn(element))
  }
  return mapped

};

const reduce = (fn, initialValue, array) => {
  let reduced = initialValue
  for (const element of array){
    reduced = fn(reduced, element)
  }
  return reduced
};

const flatMap = (fn, array) => {
  const flatMapped = []
  for (const element of array){
    for (const e of fn(element)){
      flatMapped.push(e)
    }
  }
  return flatMapped
};

const every = (condition, array) => {
  for (const element of array){
    if (!condition(element)){
      return false
    }
  }
  return true
};

const some = (condition, array) => {
    for (const element of array){
    if (condition(element)){
      return true
    }
  }
  return false
};
