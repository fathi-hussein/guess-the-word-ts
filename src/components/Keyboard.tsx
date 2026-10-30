import type {JSX} from 'react'
import type { GuessedLetter } from '../App'

type Props = {
  gameOver:boolean
  letters:string[]
  CheckLetter:(letter:string) => void
  guessedLetter:GuessedLetter
}

export default function Keyboard({gameOver,letters,CheckLetter,guessedLetter}:Props):JSX.Element{

  return(
    <div className={!gameOver?'keyboard-grid':'keyboard-grid keyboard-overlay'}>
          {letters.map((letter:string)=>(<button key={letter} onClick={()=> !gameOver && CheckLetter(letter)} className={`key ${guessedLetter[letter] || ''}`}>{letter}</button>))}
    </div>
  )
}