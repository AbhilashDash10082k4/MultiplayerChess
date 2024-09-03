import {types} from './Actions' //types hold diff actns to be dispatched

const getPositions = (moves) => { //getPositions processes the array of moves and extracts specific parts of each move, which will be used to update the state.
    return (
        moves.map((move) => {
            const n = move.length; //length of each item separately, move === string

            return move.substring(n - 2); //takes the last 2 chars of move string, which is a position on the board
        })
    )
}
export default function GameReducer(state, action) { //action is an object containing types of actions and moves to perform

    switch (action.type) { //action.type = types of actions, switch = actively changing state based on actions

        case types.SET_POSSIBLE_MOVES:
            return {
                ...state,
                possibleMoves: getPositions(action.moves), //updates possibleMoves with the result of getPositions

                //moves is an array containing possible cells to move along with the pieces. So getPositions gets only the posssible cells

                //the pieces are moved and only the last 2 chars (eg. a1, e4, etc) are returned which are possible cells
            };

        case types.CLEAR_POSSIBLE_MOVES: //after conducting the possible move clear the possible moves for the time being for the recently moved piece by setting possibleMoves to empty arr

        //this is a clearance funcn
            return {
                ...state,
                possibleMoves: [],
            }
        case types.SET_TURN:
            return {
                ...state,
                turn: action.player,
                check: action.check
            }
        default:
            return state;
    }
}
//this GameReducer updates state
