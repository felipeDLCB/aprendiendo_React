import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './componentes/Square.jsx'
import { Turns } from './constantes.js'
import { checkWinner, checkEmpate } from './logic/board.js'
import { WinnerModal } from './componentes/Winner.jsx'
import './App.css'


function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? Turns.X
  })
  const [winner, setWinner] = useState(null)

  const actualizarTablero = (index) => {

    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === Turns.X ? Turns.O : Turns.X

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }
    else if (checkEmpate(newBoard)) setWinner(false)
  }




  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(Turns.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }


  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reiniciar partida</button>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={actualizarTablero}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === Turns.X}>
          {Turns.X}
        </Square>
        <Square isSelected={turn === Turns.O}>
          {Turns.O}
        </Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>

    </main>
  )

}

export default App
