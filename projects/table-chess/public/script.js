const play = {
    board: [],
    visualBoard: document.getElementById('board'),
    player: 'white',
    pickedUp: undefined,
}
play.visualBoard.addEventListener("selectstart", event => event.preventDefault());

const squareClicked = (square, row, file) => {
    if ((square.piece != undefined) && (square.piece.color === play.player) && (play.pickedUp == undefined)) {
        const c = square.element.style.backgroundColor
        if (c == 'sandybrown') {
            square.element.style.backgroundColor = 'lightgreen'
        } else if (c == 'saddlebrown') {
            square.element.style.backgroundColor = 'darkgreen'
        }
        play.pickedUp = square.piece
    } else if ((play.pickedUp != undefined) && !(`${play.pickedUp.row}${play.pickedUp.file}` == `${row}${file}`) && (play.pickedUp.checkIfLegal(square, row, file)) && ((square.piece == undefined) || (square.piece.color != play.player))) {
        console.log(play.pickedUp)
        const c = play.board[play.pickedUp.row][play.pickedUp.file].element.style.backgroundColor
        if (c == 'lightgreen') {
            play.board[play.pickedUp.row][play.pickedUp.file].element.style.backgroundColor = 'sandybrown'
        } else if (c == 'darkgreen') {
            play.board[play.pickedUp.row][play.pickedUp.file].element.style.backgroundColor = 'saddlebrown'
        }
        play.pickedUp.placePiece(row, file)
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
                squareClicked(play.board[row][square], row, square)
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
        play.board[row][file].element.innerHTML = this.face;
        play.board[row][file].piece = this;
        play.board[this.row][this.file].element.innerHTML = '';
        play.board[this.row][this.file].piece = undefined;
        this.row = row
        this.file = file
        play.player = play.player === 'black' ? 'white' : 'black'
    }


}

class Pawn extends Piece {
    checkIfLegal(square, row, file) {
        console.log('square', square, row, file)
        if ((this.color === `black`) && (
            ((row-this.row === 1) && (this.file === file)) || 
            (
                (this.file === file) &&
                (this.row === 1) && 
                (row === 3) && 
                (play.board[5][file].piece == undefined)
            ) || 
            ((row - this.row === 1) && (Math.abs(file - this.file) === 1)  && (play.board[row][file].piece.color === 'white'))
        )) {
            return true;
        } else if ((this.color === `white`) && (
            ((row-this.row === -1) && (this.file === file)) || 
            (
                (this.file === file) &&
                (this.row === 6) && 
                (row === 4) && 
                (play.board[row][file].piece == undefined) && 
                (play.board[5][file].piece == undefined)
            ) || 
            ((row - this.row === -1) && (Math.abs(file - this.file) === 1)  && (play.board[row][file].piece.color === 'black'))
        )) {
            return true;
        } else return false //en passant later
    }
}

class Rook extends Piece {
    checkIfLegal(square, row, file) {
        if ((this.row === row)) {
            for (let i = Math.min(this.file, file) + 1; i < Math.max(this.file, file); i++) {
                if (play.board[this.row][i].piece != undefined) {
                    return false;
                }
            }
            return true;
        } else if (this.file === file) {
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
            let r = this.row+Math.sign(row-this.row)
            let f = this.file+Math.sign(file-this.file)
            while ((r != row) && (f != file)) {
                if (play.board[r][f].piece != undefined) {
                    return false
                }
                r+= Math.sign(row-this.row)
                f+= Math.sign(file-this.file)
            }
            return true;
        } else return false
    }
}

class Queen extends Piece {
    checkIfLegal(square, row, file) {
        if (Math.abs(Math.abs(this.row - row) / Math.abs(this.file - file)) === 1) {
            let r = this.row+Math.sign(row-this.row)
            let f = this.file+Math.sign(file-this.file)
            while ((r != row) && (f != file)) {
                if (play.board[r][f].piece != undefined) {
                    return false
                }
                r+= Math.sign(row-this.row)
                f+= Math.sign(file-this.file)
            }
            return true;
        } else if ((this.row === row)) {
            for (let i = Math.min(this.file, file) + 1; i < Math.max(this.file, file); i++) {
                if (play.board[this.row][i].piece != undefined) {
                    return false;
                }
            }
            return true;
        } else if (this.file === file) {
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
        if ((Math.abs(this.row - row) <= 1) || (Math.abs(this.file - file) <= 1)){
            return true
        } else return false;
    }
}

const initPieces = () => {
    play.board[0][0].piece = new Rook(0, 0, 'black', '♜')
    play.board[0][1].piece = new Knight(0, 1, 'black', '♞')
    play.board[0][2].piece = new Bishop(0, 2, 'black', '♝')
    play.board[0][3].piece = new Queen(0, 3, 'black', '♛')
    play.board[0][4].piece = new King(0, 4, 'black', '♚')
    play.board[0][5].piece = new Bishop(0, 5, 'black', '♝')
    play.board[0][6].piece = new Knight(0, 6, 'black', '♞')
    play.board[0][7].piece = new Rook(0, 7, 'black', '♜')
    for (let x = 0; x <= 7; x++) {
        play.board[1][x].piece = new Pawn(1, x, 'black', '♟︎');
        play.board[0][x].element.innerHTML = play.board[0][x].piece.face;
        play.board[1][x].element.innerHTML = '♟︎';
    }

    play.board[7][0].piece = new Rook(7, 0, 'white', '♖')
    play.board[7][1].piece = new Knight(7, 1, 'white', '♘')
    play.board[7][2].piece = new Bishop(7, 2, 'white', '♗')
    play.board[7][3].piece = new Queen(7, 3, 'white', '♕')
    play.board[7][4].piece = new King(7, 4, 'white', '♔')
    play.board[7][5].piece = new Bishop(7, 5, 'white', '♗')
    play.board[7][6].piece = new Knight(7, 6, 'white', '♘')
    play.board[7][7].piece = new Rook(7, 7, 'white', '♖')
    for (let x = 0; x <= 7; x++) {
        play.board[6][x].piece = new Pawn(6, x, 'white', '♙');
        play.board[7][x].element.innerHTML = play.board[7][x].piece.face;
        play.board[6][x].element.innerHTML = '♙';
    }
}

initBoard();
initPieces();