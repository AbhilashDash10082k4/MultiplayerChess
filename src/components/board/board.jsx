/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Cell from "../cell/cell";
import PropTypes from 'prop-types'
import { set } from "mongoose";

export const Board = ({ cells, makeMove, setFromPos }) => { //...props is th espread operator that traverses through all the props and and pass it down to the component, here the props in board are passed down to cell component as cell is involved in the drag and drop logic
    return (
        <div className="board w-[calc(100vh_*_0.9)] h-[calc(100vh_*_0.85)] grid grid-cols-[repeat(8,1fr)] bg-[#262522] mt-8 mx-auto my-0 p-[3.25rem] rounded-xl">

            {cells.map((cell, index) => {
                return (
                 <Cell cell={cell} index={index} key={cell.pos} makeMove={makeMove} setFromPos={setFromPos}></Cell>
                )
            })}
        </div>
    )
}
Board.prototype= { 
    cells: PropTypes.array.isRequired,
    makeMove: PropTypes.func,
    setFromPos: PropTypes.func,
}