/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//useContext is used so that no more props are needed to be passed down to components

import React, { createContext, useReducer } from 'react' //createContext is used to create a Context object that allows you to pass data deeply throughout the component tree without passing props down manually at every level.
import GameReducer from './GameReducer';

const initialState = { 
    possibleMoves: [],
    turn: 'w', //current turn
    check: false, //true when player to move is in check 
    //an action is dispatched to reducer funcn which will update the state of check and turn,

    //turn and check will be updated by GameReducer when SET_TURN action is dispatched
}
export const GameContext = createContext(initialState); //creates a context object called GameContext using the createContext function.

export default function GameProvider ({children}) {
    const [state, dispatch] = useReducer(GameReducer, initialState) //dispatch func updates the state,  state is initialized to GameReducer which will determine the change of state of game

    //useReducer returns an array [state, dispatch], type.dispatch = function, when dispatch called = GameReducer is called to update the state

    //GameContext.Provider is used to supply the state and dispatch function to any components nested within the provider.

    //value prop is an object that contains the current state (using the spread operator ...state) and the dispatch function

    //value is what other components will consume when they access the GameContext.

    //children =  nested component in GameContext.Provider, these will be able to access the game state and dispatch actions to modify that state
    return (
        <GameContext.Provider value={{...state, dispatch}}>
            {children}
        </GameContext.Provider>
    )
}
