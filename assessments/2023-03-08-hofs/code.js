const evens = (numbers) => { // correct
  const noRm = []
  for (const element of numbers) {
    if (element % 2 === 0) {
      noRm.push(element)
    }
  }
  return noRm
};

const shouty = (strings) => { // correct
  const loud = []
  for (const element of strings) {
    loud.push(element.toUpperCase())
  }
  return loud
};

const join = (strings, delimiter) => { // correct
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

const allSiblings = (students) => { // correct
  const siblings = []
  for (const student of students){
    for (const sibling of student.siblings){
      siblings.push(sibling)
    }
  }
  return siblings
};
//console.log(allSiblings([{siblings: ['mary', 'mark', 'joe']}, {siblings: ['alfred', 'joann', 'homer']}] ))
const allPassing = (students, passing) => { // correct
  for (const student of students){
    if (student.grade < passing){
      return false
    }
  }
  return true
};
const someonesFavorite = (people, food) => { // correct
   for (const person of people){
    if (person.favoriteFood === food){
      return true
    }
  }
  return false
};

const strange = (people) => people.filter(p => p.isStrange) // correct

const birthdays = (students) => students.map(student => student.birthday) // correct

const heaviest = (animals) => animals.reduce((m,c) => Math.max(c.weight, m), 0) // correct

const allStudents = (grades) => grades.map(e => e.students) // something
console.log(allStudents([{students: ['jane goodall', 'rumplestiltskin', 'barack obama', 'john f kennedy', 'winston churchill']},
{students: ['abraham lincoln', 'xi jinping', 'richard nixon', 'jon arbuckle']}]))
//seems scuffed but seems to work as well

const allCromulent = (things) => things.every(e => isCromulent(e)) // correct

const notAllTerrible = (things) => things.some(e => !isTerrible(e)) // correct