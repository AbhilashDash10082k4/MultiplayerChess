 

//We need to write a function that takes in a FEN string and returns a board. The boad will be an array of Cells. Each cell will be an object with a position property (coordinates of the board) and a piece property (the piece it holds).

//take the string FEN as ip and return arr of objects

export class Cell { // for eg. "a2":n =>  a2 having knight
    constructor(pos, piece) {
        this.pos = pos,
        this.piece = piece
    }
}
const range = (n) => {
    return Array.from({length: n}, (_, i) => i+1) //Array.from{length:n} = array with n empty slots , (_, i) = 1st param ignored, i = index of each elem of arr,  (_, i) => i+1) mapping funcn for Array.from to assign elems at each index
}
//a logic to create an array from FEN
export const createBoard = (fenString) => {
    const fen = fenString.split(' ')[0]; //op = rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR

    const fenPieces = fen.split('/').join(''); ///extracts the board pieces , remove '/'

    let pieces = Array.from(fenPieces); //creates array of pieces op= ['p','p',...'R']

    pieces.forEach((item, index) => { //item = curr elem under process, index = index of pieces arr

        if(isFinite(item)) { //isFinite(item) = whether item = finite number, the 8/8/8/8 reps the empty 4 rows in CB. so isFinite accesses the empty rows

            pieces.splice(index, 1 , range(item).fill(''));
            
        } //replaces 8 with an arr of 8 empty ("") strings, so this becomes a nested arr
        //final op = arr with 64 elems
    })

    pieces = pieces.flat(); // reduces the nested arr to 1D arr
    
    const rows = range(8).map((n) => n.toString()).reverse();
    //rows = ["8", ..."1"]

    const columns = ['a','b','c','d','e','f','g','h'];

    const cells = []; //will give coordinates of boxes

    for(let i = 0; i < rows.length; i++) {
        const row = rows[i];
        for(let j = 0; j< columns.length; j++) {
            const col = columns[j];
            cells.push(col + row); //concatenation of strings
            //col + row = a1, a2, a3...h1, h2, h3...h8
            //cells = [a1, a2, a3...h1, h2, h3...h8]
        }
    }
    const board = [];
    for(let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        const piece = pieces[i];
        board.push(new Cell(cell, piece));
    }
    return board;
}

console.log(
    createBoard('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
);