import type {JSX} from 'react'

type Props = {
  gameOver:boolean
  newGame:()=>void
}

export default function NewGameButton({gameOver,newGame}:Props):false | JSX.Element{

  return(
    gameOver && <button className='submit-btn' onClick={newGame}>New Game</button>
        
  )
}