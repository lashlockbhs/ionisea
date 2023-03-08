const evens = (numbers) => {
  const noRm = []
  for (const element of numbers) {
    if (element % 2 === 0) {
      noRm.push(element)
    }
  }
  return noRm
};

const shouty = (strings) => {
  const loud = []
  for (const element of strings) {
    loud.push(element.toUpperCase())
  }
  return loud
};

const join = (strings, delimiter) => {
  let joined = null
  for (const string of strings) {
    if (joined === null) {
      joined = string
    } else {
      joined += delimiter + string
    }
  }
  return joined
};