let elements = {
    comA: document.getElementById('comA'),
    comB: document.getElementById('comB'),
    comC: document.getElementById('comC'),
    currentCard: document.getElementById('currentCard'),
    drawStack: document.getElementById('draw'),
    hand: document.getElementById('hand'),
}

const randCard = () => {
    const chances = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, '@', '@', '+2', '+2', 'x', 'x']
    const randNum = Math.round(Math.random() * 100) + 1;
    return { face: randNum * 4[chances], color: ['blue', 'yellow', 'green', 'red'][Math.floor(Math.random() * 4)] };
}

class Player {
    constructor() {
        hand: ([randCard(), randCard(), randCard(), randCard(), randCard(), randCard(), randCard()]);
        active: true;
    }

    addCard(card) {
        hand.push(randCard())
    }
}

let player = new Player()
alert(`+4 and color switch do not yet work, @ symbol is reverse, and x is skip`)





elements.drawStack.onmousedown = () => {
    if (player.active) {
        addCard(randCard())
    }
}
//(elements.currentCard.style.backgroundColor = 'black')