/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react"
import GameReducer from "./GameReducer";

const initialState = {
    possibleMoves: []
}
export const GameContext = createContext(initialState);

export default function GameProvider({children}) {
    const [state, dispatch] = useReducer(GameReducer, initialState); //array destructuring, dispatch triggers the state update
    return (
        <GameContext.Provider value={{...state, dispatch}}>
            {children}
        </GameContext.Provider>
    )
}