let elements = {
    comA: document.getElementById('comA'),
    comB: document.getElementById('comB'),
    comC: document.getElementById('comC'),
    currentCard: document.getElementById('currentCard'),
    drawStack: document.getElementById('draw'),
    hand: document.getElementById('hand'),
    arrow: document.getElementById('arrow'),
}

const randCard = () => {
    const chances = ['0', '1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8', '9', '9', '@', '@', '+2', '+2', 'x', 'x'] // add 1 +4 and 1 color switch
    const randNum = Math.floor(Math.random() * 25); //change to 27
    return ({ face: chances[randNum], color: ['blue', 'yellow', 'green', 'red'][Math.floor(Math.random() * 4)] })
}

const sleep = (ms) => {
    let date = Date.now();
    let curDate = null;
    for (curDate = Date.now(); curDate > date + ms; curDate = Date.now()) {

    }
};
const newHand = () => [randCard(), randCard(), randCard(), randCard(), randCard(), randCard(), randCard()]

class Com {
    constructor(element, symbol) {
        this.hand = newHand();
        this.display = element;
        this.symbol = symbol;
    }

    addCard() {
        this.hand.push(randCard())
        this.display.innerHTML = `Com ${this.symbol}: ${this.hand.length} ${'🂠'.repeat(this.hand.length)}`
    }

    playCard(card) {
        playing.currCard = card
        this.hand.splice(this.hand.findIndex(e => e == card), 1)
        checkForAbility(card)
        if (this.hand.length === 0) {
            alert(`Com ${this.symbol} wins.`)
            location.reload()
        }
        this.display.innerHTML = `Com ${this.symbol}: ${this.hand.length} ${'🂠'.repeat(this.hand.length)}`
        updateCurrCard(card)
    }

    turn() {
        const possiblePlays = this.hand.filter((card) => (card.color === playing.currCard.color) || (card.face === playing.currCard.face))
        if (possiblePlays.length > 0) {
            this.playCard(possiblePlays[Math.floor(Math.random() * possiblePlays.length)])
        } else {
            this.addCard()
        }
        moveTurn()
    }
}

class Player {
    constructor() {
        this.hand = []
        this.cardDispArr = []
    }

    drawCard(active) {
        let card = randCard()
        //card.face= '+2'
        this.hand.push(card)
        const disp = document.createElement('div')
        disp.className = 'card'
        disp.style.backgroundColor = card.color//setAttribute('style', `backgroundColor: ${card.color}`)
        disp.append(document.createTextNode(card.face))
        disp.addEventListener('mousedown', () => {
            if ((playing.active === 0) && (card.color == playing.currCard.color) || (card.face == playing.currCard.face)) {
                this.playCard(card, disp)
            }
        }
        )
        this.cardDispArr.push(disp)
        elements.hand.append(disp)
        if (active !== false) moveTurn();
    }

    playCard(card, disp) {
        const original = this.cardDispArr
        disp.remove()
        const ind = this.cardDispArr.findIndex((e, i) => e === original[i])
        this.hand.splice(ind, 1)
        checkForAbility(card)
        updateCurrCard(card)
        if (this.hand.length === 0) {
            alert(`You Win !`)
            location.reload()
        }
        moveTurn()
    }
}

let playing = {
    direction: 1, //1 being forward, -1 being backward
    active: 0, // 0 is player ,1,2,3 are the respective coms
    comA: new Com(elements.comA, 'A'),
    comB: new Com(elements.comB, 'B'),
    comC: new Com(elements.comC, 'C'),
    currCard: null,
}

const checkForAbility = (card) => {
    const action = [{ face: 'x', action: () => playing.active = (((playing.direction + playing.active) % 4) + 4) % 4 },
    {
        face: '@', action: () => {
            playing.direction = -playing.direction;
            elements.arrow.innerHTML = elements.arrow.innerHTML == '→' ? '←' : '→'
        }
    },
    {
        face: '+2', action: () => {
            const nextPlayer = (((playing.direction + playing.active) % 4) + 4) % 4;
            if (nextPlayer === 0) for (let x = 0; x < 2; x++) player.drawCard(false)
            if (nextPlayer === 1) for (let x = 0; x < 2; x++) playing.comA.addCard()
            if (nextPlayer === 2) for (let x = 0; x < 2; x++) playing.comB.addCard()
            if (nextPlayer === 3) for (let x = 0; x < 2; x++) playing.comC.addCard()
            playing.active = (((playing.direction + playing.active) % 4) + 4) % 4
        }
    }].find((e) => e.face === card.face)//.action
    // console.log(action)
    if (action != undefined) {
        action.action()
    }
}

const updateCurrCard = (card) => {
    playing.currCard = card;
    elements.currentCard.style.backgroundColor = card.color
    elements.currentCard.innerHTML = card.face
}

const moveTurn = async () => {
    playing.active = (((playing.direction + playing.active) % 4) + 4) % 4;
    const delay = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
    if (playing.active === 1) {
        elements.hand.style.backgroundColor = 'grey'
        elements.comA.style.backgroundColor = 'green'
        await delay(500 + Math.round(Math.random() * 500));
        playing.comA.turn();
        elements.comA.style.backgroundColor = 'transparent'
        await delay(250)
    } else if (playing.active === 2) {
        elements.comB.style.backgroundColor = 'green'
        await delay(500 + Math.round(Math.random() * 500));
        playing.comB.turn();
        await delay(250 )
        elements.comB.style.backgroundColor = 'transparent'
    } else if (playing.active === 3) {
        elements.comC.style.backgroundColor = 'green'
        await delay(500 + Math.round(Math.random() * 500));
        playing.comC.turn();
        await delay(250)
        elements.comC.style.backgroundColor = 'transparent'
        elements.hand.style.backgroundColor = 'transparent'
    }
} //adapted from ChatGPT as MDN was kinda useless, will fix

const player = new Player()

window.onload = () => {
    updateCurrCard(randCard())
    for (let x = 0; x < 7; x++) {
        player.drawCard(false)
    }
}

elements.drawStack.onmousedown = (() => {
    if (playing.active == 0) {
        player.drawCard()
    }
})

