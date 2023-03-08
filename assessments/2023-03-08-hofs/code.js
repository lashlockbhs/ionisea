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

const allSiblings = (students) => {
  const siblings = []
  for (const student of students){
    for (const sibling of student.siblings){
      siblings.push(sibling)
    }
  }
  return siblings
};
//console.log(allSiblings([{siblings: ['mary', 'mark', 'joe']}, {siblings: ['alfred', 'joann', 'homer']}] ))
const allPassing = (students, passing) => {
  for (const student of students){
    if (student.grade < passing){
      return false
    }
  }
  return true
};
const someonesFavorite = (people, food) => {
   for (const person of people){
    if (person.favoriteFood === food){
      return true
    }
  }
  return false
};

const strange = (people) => people.filter(p => p.isStrange)

const birthdays = (students) => students.map(student => student.birthday)

const heaviest = (animals) => animals.reduce((m,c) => Math.max(c, m), 0)