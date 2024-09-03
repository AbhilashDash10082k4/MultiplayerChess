/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Game } from './pages/Game'
import GameProvider from './context/GameContext'

function App() {
  return (
    
      <GameProvider> {/*GameProvider provides the value={{...state, dispatch}} accessible by its child component <Game> */}
        <Game></Game>
      </GameProvider>
    
  )
}

export default App
 