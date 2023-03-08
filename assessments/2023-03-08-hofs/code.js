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