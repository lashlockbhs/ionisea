const play = {
    board : [],
    visualBoard : document.getElementById('board'),
    player: 'white',
    pickedUp: undefined,

}

const squareClicked = (square, row, file) => {
    if ((square.piece != undefined) && (square.piece.color === play.player) && (play.pickedUp == undefined)){
        square.element.style.backgroundColor = 'green'
        play.pickedUp = square.piece
    } else if ((play.pickedUp != undefined) && (`${row}${file}` != `${square.id}`)) {
        play.pickedUp.placePiece
    }
    
}

const initBoard = () => {
    for (let row = 0; row <= 7; row++) {
        const boardRow = []
        const visualRow = document.createElement('tr')
        for (let square = 0; square <= 7; square++) {
            const boardSquare = document.createElement('td') //document.getElementById(`${row}${square}`)
            boardSquare.style.backgroundColor = ((row % 2 === 0) && (square % 2 === 0)) || ((row % 2 === 1) && (square % 2 === 1)) ? `white` : `black`
            boardSquare.id = `${row}${square}`
            boardSquare.addEventListener('mousedown', (e) => {
                squareClicked(play.board[row][square], row, square)
                console.log(square)
            })
            boardRow.push({ element: boardSquare, piece: undefined })
            visualRow.append(boardSquare)
        }
        play.board.push(boardRow)
        play.visualBoard.append(visualRow)
    }
}

class Piece {
    constructor(file, row, color, face) {
            this.file = file,
            this.row = row,
            this.color = color,
            this.face = face
    }

    placePiece(row, file) {
        board[row][file].element.innerHTML = this.face;
        board[row][file].piece = this;
        board[this.row][this.file].element.innerHTML = '';
        board[this.row][this.file].piece = undefined;
    }


}

class Pawn extends Piece {

}

class Rook extends Piece {

}

class Knight extends Piece {
    
}

class Bishop extends Piece {

}

class Queen extends Piece {

}

class King extends Piece {
    
}

const initPieces = () => {

}

initBoard();