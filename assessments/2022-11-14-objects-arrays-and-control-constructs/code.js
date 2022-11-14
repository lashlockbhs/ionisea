// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => {
  return rect.width * rect.height
};

const higherPaid = (e1, e2) => {
  return Math.max(e1.salary, e2.salary)
};

const isSamePoint = (p1, p2) => {
  return p1 == p2
};

const totalWithTip = (bill, tipPercentage) => {
  return { subtotal: bill, tip: bill * tipPercentage, total: bill + bill * tipPercentage }
};

const isWinner = (player) => {
  return player.score > 100
};

const updateWins = (players) => {
  for (const element of players) {
    if (isWinner(element.score)) {
      element.wins += 1
      element.score = 0
    }
  }
};

const bigWinners = (players) => {
  const array = []
  for (const element of players) {
    if (element.wins > 10) array.push(element)
  }
  return array
};

const fillTimesTable = (table) => {
  const array = []
  for (const element of table) {
    array.push(table[element][element] * table)
  }
  return array
};

const sums = (n) => {
  const arr = []
  for (let a = 0; a < n; a++) {
    let acc
    for (const element of arr) {
      acc += arr[element] + element
    }
    arr.push(acc)
  }
  return arr
};

const rule110 = (cells) => {
};
