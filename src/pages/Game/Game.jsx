/* eslint-disable no-unused-vars */
import React, { useRef, useState ,useEffect, useContext} from "react";
import { Chess } from "chess.js";
import { createBoard } from "../../functions";
import {Board} from "../../components/board/board";

import { GameContext } from "../../context/GameContext";
import { types } from "../../context/Actions";

const FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1" //default position in chess.js ,fen = forsyth edward notation

export const Game = () => {
    const [fen, setFen] = useState(FEN); //updates fen (states of the board)
    const {current: chess} = useRef(new Chess(fen)); //current is a property of useRef
    const [board, setBoard] = useState(createBoard(fen)); //createBoard(fen) fen string leta hai aur board banata hai

    const {dispatch} = useContext(GameContext);

    useEffect(() => {
        setBoard( createBoard(fen) );
    }, [fen]) //updates the state of board when the state of board changes...when the fen string changes, fen will change when moves will occur

     useEffect(() => {
        dispatch({
            type: types.SET_TURN,
            player: chess.turn(),
            check: chess.inCheck(),
        });
     },[fen,dispatch, chess]) //dispatch and chess do not change but are added to dependencies

    //We use a ref since useRef values are not reset/lost incase the component re-renders.
    const fromPos = useRef();
    
    function makeMove(pos) { //takes in the cell we want to move to as it's parameter
        const from = fromPos.current;

        const to = pos; //to is the current pos
        
        chess.move({from, to}); //chess.move() has move validation logic

        dispatch({type: types.CLEAR_MOVES}) //object we provide to dispatch({}) is received by our reducer as the value of action

        setFen(chess.fen()); //updates the board with new pos of the moved piece , from here the control reaches to the useEfect which sets the board with the curr fen val
    }

    const setFromPos = (pos) => { // called onDragStart
        fromPos.current = pos;
        dispatch({
            type: types.SET_POSSIBLE_MOVES, 
            moves: chess.moves({square: pos}) //returns a list of possible moves
        })
    } //resets the board with new piece on  its current location to the state where the other side can move a piece

    return (
        <div className="game">
            <Board cells={board} makeMove={makeMove} setFromPos={setFromPos} ></Board>
        </div>
    )
}