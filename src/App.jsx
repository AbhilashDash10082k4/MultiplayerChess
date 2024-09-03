/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Game } from './pages/Game/Game'
import GameProvider from './context/GameContext'

function App() {
  return (
    
      <GameProvider> {/*GameProvider => GameContext.Provider => provides the state*/}
        <Game></Game>
      </GameProvider>
    
  )
}

export default App
 