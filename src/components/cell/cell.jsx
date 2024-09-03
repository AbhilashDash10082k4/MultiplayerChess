/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react"
import isLightSquare from "../../functions/lightSquare";
import {Cell as BoardCell} from '../../functions';
import PropTypes from 'prop-types';
import Piece from "../piece/piece";
import { GameContext } from "../../context/GameContext";

export default function Cell({cell, index, makeMove, setFromPos}) { //The cell will be an instance of Cell, with the pos and piece properties.

//index as a second prop. This is the index of the cell in the board array.
    const light = isLightSquare(cell.pos, index); //determines whether a cell should be styled as light or dark based on this parameters.

    const {possibleMoves, turn, check} = useContext(GameContext);
    
    const isPossibleMove = possibleMoves.includes(cell.pos)

    const color = cell.piece.toUpperCase() === cell.piece ? 'w' : 'b';

    function inCheck() {
        const king = cell.piece.toUpperCase() === 'K';
        return turn === color && king && check;
    }

    const handleDrop = () => {
        makeMove(cell.pos);
    } //this is an onDrop handler
    
    
    return <div className={`cell ${light ? 'bg-[#EBECD0]':'bg-[#739552]'} text-center flex justify-center items-center w-[calc((100vh_*_0.9)_/_9.5)] h-[calc((100vh_*_0.85)_/_9.5)] px-[0.35rem] py-1`} onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>

        <div className={`overlay ${isPossibleMove && 'possible-move'} ${inCheck() && check} `}>
            <Piece pos={cell.pos} name={cell.piece} setFromPos={setFromPos}></Piece>
        </div> 
    </div>
}
Cell.prototype = {
    cell: PropTypes.instanceOf(BoardCell).isRequired,
    index: PropTypes.number.isRequired,
    makeMove: PropTypes.func,
    setFromPos: PropTypes.func,
}
