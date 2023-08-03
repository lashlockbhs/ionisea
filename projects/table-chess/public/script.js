let play = {
    board: [],
    visualBoard: document.getElementById('board'),
    player: 'white',
    pickedUp: undefined,
    whiteDisplay: document.getElementById('whiteDisp'),
    blackDisplay: document.getElementById('blackDisp'),
    moves: [],
}
play.visualBoard.addEventListener("selectstart", event => event.preventDefault());

const refaceTiles = () => {
    for (const row of play.board) {
        for (const tile of row) {
            if (tile.piece != undefined) {
                tile.element.innerHTML = tile.piece.face
                tile.element.style.color = tile.piece.color
            } else {
                tile.element.innerHTML = ''
            }
        }
    }
}

const turn = () => {
    play[`${play.player}Display`].style.backgroundColor = `transparent`
    play.player = play.player === 'black' ? 'white' : 'black'
    play[`${play.player}Display`].style.backgroundColor = `green`

    play.board.reverse()
    play.board.forEach((row, r) => {
        row.reverse()
        row.forEach((square, f) => {
            square.element = document.getElementById('' + r + f)
            if (square.piece != undefined) {
                square.piece.row = r
                square.piece.file = f
            }
        })
    })
    console.log(play.board)
    refaceTiles();
}

document.onkeydown = (k) => {
    if (k.key == 't') {
        turn();
    }
    if (k.key === `b`) {
        console.log(play.board)
    }
    if (k.key === `g`) {
        const r = Math.floor(Math.random() * 8)
        const f = Math.floor(Math.random() * 8)
        play.board[r][f].piece = new God(r, f, play.player, '帝')
        refaceTiles();
    }
}

const inverseColor = {
    darkgreen: 'saddlebrown',
    lightgreen: 'sandybrown',
    saddlebrown: 'darkgreen',
    sandybrown: 'lightgreen',
}

const squareClicked = (square) => {
    const r = parseInt(square.id[0])
    const f = parseInt(square.id[1])
    const visualSquare = play.board[r][f]
    const c = square.style.backgroundColor
    if ((visualSquare.piece != undefined) && (visualSquare.piece.color === play.player) && (play.pickedUp == undefined)) {
        square.style.backgroundColor = inverseColor[c]
        play.pickedUp = visualSquare.piece
    } else if ((play.pickedUp != undefined) && !(`${play.pickedUp.row}${play.pickedUp.file}` == square.id) && (play.pickedUp.checkIfLegal(visualSquare, r, f)) && ((visualSquare.piece == undefined) || (visualSquare.piece.color != play.player))) {
        play.board[play.pickedUp.row][play.pickedUp.file].element.style.backgroundColor = inverseColor[play.board[play.pickedUp.row][play.pickedUp.file].element.style.backgroundColor]
        console.log(c)
        play.pickedUp.placePiece(r, f)
        play.moves.push({ face: play.pickedUp.face, color: play.pickedUp.color, start: { row: play.pickedUp.row, file: play.pickedUp.file }, end: { row: r, file: f } })
        play.pickedUp = undefined
    } else if (visualSquare.piece === play.pickedUp) {
        square.style.backgroundColor = inverseColor[c]
        play.pickedUp = undefined
    }

}

const initBoard = () => {
    for (let row = 0; row <= 7; row++) {
        const boardRow = []
        const visualRow = document.createElement('tr')
        for (let square = 0; square <= 7; square++) {
            const boardSquare = document.createElement('td')
            boardSquare.style.backgroundColor = ((row % 2 === 0) && (square % 2 === 0)) || ((row % 2 === 1) && (square % 2 === 1)) ? `sandybrown` : `saddlebrown`
            boardSquare.id = `${row}${square}`
            boardSquare.addEventListener('mousedown', (e) => {
                squareClicked(boardSquare, row, square)
            })
            boardRow.push({ element: boardSquare, piece: undefined })
            visualRow.append(boardSquare)
        }
        play.board.push(boardRow)
        play.visualBoard.append(visualRow)
    }
}

class Piece {
    constructor(row, file, color, face) {
        this.file = file,
            this.row = row,
            this.color = color,
            this.face = face
    }

    placePiece(row, file) {
        if (play.board[row][file].piece !== undefined) {
            play[`${play.player}Display`].innerHTML += play.board[row][file].piece.face
        }
        play.board[row][file].element.innerHTML = this.face;
        play.board[row][file].element.style.color = this.color;
        play.board[row][file].piece = this;
        play.board[this.row][this.file].element.innerHTML = '';
        play.board[this.row][this.file].piece = undefined;
        this.row = row
        this.file = file
        turn();
    }


}

class Pawn extends Piece {
    checkIfLegal(square, row, file) {
        if ((row == this.row - 1) && (this.file == file)) return true
        else if ((this.file == file) && (this.row == 6) && (row == 4) && (play.board[5][file].piece == undefined)) return true
        else if ((row == this.row - 1) && (Math.abs(file - this.file) == 1) && (play.board[row][file].piece.color !== this.color)) return true
        else return false //en passant later
    }
}

class Rook extends Piece {
    checkIfLegal(square, row, file) {
        if ((this.row == row)) {
            for (let i = Math.min(this.file, file) + 1; i < Math.max(this.file, file); i++) {
                if (play.board[this.row][i].piece != undefined) {
                    return false;
                }
            }
            return true;
        } else if (this.file == file) {
            for (let i = Math.min(this.row, row) + 1; i < Math.max(this.row, row); i++) {
                if (play.board[i][this.file].piece != undefined) {
                    return false;
                }
            }
            return true;
        } else return false;
    }
}

class Knight extends Piece {
    checkIfLegal(square, row, file) {
        if ((Math.abs(this.row - row) === 2) && (Math.abs(this.file - file) === 1) || (Math.abs(this.row - row) === 1) && (Math.abs(this.file - file) === 2)) {
            return true
        } else return false;
    }
}

class Bishop extends Piece {
    checkIfLegal(square, row, file) {
        if (Math.abs(Math.abs(this.row - row) / Math.abs(this.file - file)) === 1) {
            let r = this.row + Math.sign(row - this.row)
            let f = this.file + Math.sign(file - this.file)
            while ((r != row) && (f != file)) {
                if (play.board[r][f].piece != undefined) {
                    return false
                }
                r += Math.sign(row - this.row)
                f += Math.sign(file - this.file)
            }
            return true;
        } else return false
    }
}

class Queen extends Piece {
    checkIfLegal(square, row, file) {
        if (Math.abs(Math.abs(this.row - row) / Math.abs(this.file - file)) === 1) {
            let r = this.row + Math.sign(row - this.row)
            let f = this.file + Math.sign(file - this.file)
            while ((r != row) && (f != file)) {
                if (play.board[r][f].piece != undefined) {
                    return false
                }
                r += Math.sign(row - this.row)
                f += Math.sign(file - this.file)
            }
            return true;
        } else if ((this.row == row)) {
            for (let i = Math.min(this.file, file) + 1; i < Math.max(this.file, file); i++) {
                if (play.board[this.row][i].piece != undefined) {
                    return false;
                }
            }
            return true;
        } else if (this.file == file) {
            for (let i = Math.min(this.row, row) + 1; i < Math.max(this.row, row); i++) {
                if (play.board[i][this.file].piece != undefined) {
                    return false;
                }
            }
            return true;
        } else return false;
    }
};


class King extends Piece {
    checkIfLegal(square, row, file) {
        if ((Math.abs(this.row - row) <= 1) || (Math.abs(this.file - file) <= 1)) {
            return true
        } else if ((play.moves.find(e => e.color === this.color) === undefined) && (play.board[row][file].piece !== undefined) && (play.board[row][file].face == '♜') && (play.board[row][file].piece.color === 'white')) {

        } else return false;
    }
}

class God extends Piece {
    checkIfLegal() {
        return true
    }
}

const initPieces = () => {
    const classOrder = [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook]
    const faceOrder = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜']
    for (let x = 0; x <= 7; x++) {
        play.board[0][x].piece = new classOrder[x](0, x, 'black', faceOrder[x])
        play.board[7][x].piece = new classOrder[x](7, x, 'white', faceOrder[x])
        play.board[1][x].piece = new Pawn(1, x, 'black', '♟');
        play.board[6][x].piece = new Pawn(6, x, 'white', '♟');
    }

    refaceTiles();
}

initBoard();
initPieces();