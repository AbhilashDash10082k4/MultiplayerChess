import { types } from "./Actions";

function getPositions(moves) { //moves == array
    return moves.map((move) => {
        const n = move.length;
        return move.substring(n - 2);
    })
}
export default function GameReducer(state, action) { 
    switch(action.type) { //changing b/w actns => if this actn then this result => actions DISPATCHED
        case types.SET_POSSIBLE_MOVES :
            return {
                ...state,
                possibleMoves: getPositions(action.moves) //updates possibleMoves => updates initialState => updates GameContext => re renders the children

                //action.moves => set of possible moves
            }
        case types.CLEAR_MOVES : //afer move is made => CLEAR_MOVES is dispatched and original state is rendered
            return {
                ...state,
                possibleMoves: [],
            }
        default:
            return state;
    }
}