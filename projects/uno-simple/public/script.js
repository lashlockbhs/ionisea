let elements = {
    comA: document.getElementById('comA'),
    comB: document.getElementById('comB'),
    comC: document.getElementById('comC'),
    currentCard: document.getElementById('currentCard'),
    drawStack: document.getElementById('draw'),
    hand: document.getElementById('hand'),
}

/*
const delayPlay = () => { //for visible bot playing
    const start = Date.now();
    const stop = Math.random*4000
    while (Date.now < start+stop){
        let x = 2-2
    }
    return;
}   
*/


const randCard = () => {
    const chances = ['0', '1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8', '9', '9', '@', '@', '+2', '+2', 'x', 'x'] // add 1 +4 and 1 color switch
    const randNum = Math.floor(Math.random() * 25); //change to 27
    return ({ face: chances[randNum], color: ['blue', 'yellow', 'green', 'red'][Math.floor(Math.random() * 4)] })
}

const newHand = () => [randCard(), randCard(), randCard(), randCard(), randCard(), randCard(), randCard()]

class Com {
    constructor(element, symbol) {
        this.hand = newHand();
        this.display = element;
        this.symbol = symbol;
    }

    addCard() {
        this.hand.push(randCard())
        this.display.innerHTML = `Com ${this.symbol}: ${this.hand.length} cards`
    }

    playCard(card) {
        playing.currCard = card
        this.hand.splice(this.hand.findIndex(e => e == card), 1)
        checkForAbility(card)
        if (this.hand.length === 0) {
            alert(`com ${this.symbol} wins, you done messe up`)
            location.reload()
        }
        this.display.innerHTML = `Com ${this.symbol}: ${this.hand.length} cards`
        updateCurrCard(card)
    }

    turn() {
        const possiblePlays = this.hand.filter((card) => (card.color == playing.currCard.color) || (card.face == playing.currCard.face))
        // == is fallback in case i fricked something up
        if (possiblePlays.length > 0) {
            this.playCard(possiblePlays[Math.floor(Math.random() * possiblePlays.length)])
        } else {
            this.addCard()
        }
        moveTurn()
    }
}

class Player {
    constructor(hand, cardDispArr) {
        this.hand = []
        this.cardDispArr = []
    }

    drawCard(active) {
        const card = randCard()
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
            alert(`you win !!`)
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
    const abilities = [{ face: 'x', action: () => playing.active++ },
    { face: '@', action: () => playing.direction-=playing.direction },
    {
        face: '+2', action: () => {
            const nextPlayer = (((playing.direction + playing.active) % 4) + 4) % 4;
            if (nextPlayer === 0) for (let x = 1; x < 2; x++)player.drawCard(false)
            if (nextPlayer === 1) for (let x = 1; x < 2; x++)playing.comA.addCard()
            if (nextPlayer === 2) for (let x = 1; x < 2; x++)playing.comB.addCard()
            if (nextPlayer === 3) for (let x = 1; x < 2; x++)playing.comC.addCard()
        }
    }]
    const action = abilities.find((e) => e.face === card.face).action
    console.log(action)
    if (action != undefined) {
        action()
    }
}

const updateCurrCard = (card) => {
    playing.currCard = card;
    elements.currentCard.style.backgroundColor = card.color
    elements.currentCard.innerHTML = card.face
}

const moveTurn = () => {
    playing.active = (((playing.direction + playing.active) % 4) + 4) % 4
    if (playing.active === 1) {
        //delayPlay();
        playing.comA.turn()
    } else if (playing.active === 2) {
        //delayPlay();
        playing.comB.turn()
    } else if (playing.active === 3) {
        //delayPlay();    
        playing.comC.turn()
    }
}

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

