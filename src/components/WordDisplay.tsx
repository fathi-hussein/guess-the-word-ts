import type {JSX} from 'react'
import type {GuessedLetter} from '../App'

type Props = {
  currentWord:string[]
  gameOver:boolean
  guessedLetter:GuessedLetter
}

export default function WordDisplay({currentWord,gameOver,guessedLetter}:Props):JSX.Element{

  return(
    <div className="input">
          {currentWord.map((letter:string)=>(
            <div className={gameOver && guessedLetter[letter] === undefined?'letter-box fail':'letter-box'}>{(guessedLetter[letter] === 'got' || gameOver) && `${letter}`}</div>
          ))}
    </div>
  )
}