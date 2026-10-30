import {colors} from './assets/colors.ts'
import {programmingWords} from './assets/words.ts'
import { languages } from './assets/languages.ts'
import { messages } from './assets/messages.ts'

import Intro from './components/Intro'
import StatusBox from './components/StatusBox'
import LanguageChips from './components/LanguageChips.tsx';
import WordDisplay from './components/WordDisplay.tsx';
import Keyboard from './components/Keyboard.tsx';
import NewGameButton from './components/NewGameButton.tsx';

import { useState } from 'react'
import Confetti from 'react-confetti';

export type GuessedLetter = Partial<Record<string, 'got' | 'missed'>>

export default function App(){

  const [lostLang,setLostLang] = useState<string[]>([])
  const [guessedLetter,setGuessedLetter] = useState<GuessedLetter>({})
  const letters:string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const [currentWord,setCurrentWord] = useState<string[]>(():string[]=>{
    const randIndex:number = Math.floor(Math.random()*programmingWords.length)
    return programmingWords[randIndex].split('')

  })
  console.log(currentWord)



  let result: 'got' | 'missed' ;

  function CheckLetter(letter:string):void{
    if ((guessedLetter[letter])) return;

    result = currentWord.includes(letter)?'got':'missed';
    setGuessedLetter((prev:GuessedLetter)=>({
      ...prev,[letter]:result
    }))
    result === 'missed' && lostLang.length<languages.length-1? setLostLang(prev=>[...prev,languages[lostLang.length]]):null;
  }

  const hasWon:boolean = currentWord.every(letter => guessedLetter[letter] === 'got');
  const hasLost:boolean = lostLang.length===languages.length-1;
  const gameOver:boolean = hasWon || hasLost;
  
  function newGame():void {
  const randIndex:number = Math.floor(Math.random() * programmingWords.length);
  setCurrentWord(programmingWords[randIndex].split(''));
  setLostLang([]);
  setGuessedLetter({});
  }

  return(
    <>
      <div className='app-container'>

        {hasWon && <Confetti 
            numberOfPieces={1000}
            gravity={0.2}
            initialVelocityY={20}
            recycle={false}
        />}

        <Intro/>

        <StatusBox  lostLang={lostLang}
                    gameOver={gameOver}
                    messages={messages}
                    hasLost={hasLost}
                    hasWon={hasWon}
                    colors={colors}
                    />

        <LanguageChips  languages={languages}
                        lostLang={lostLang}/>

        <WordDisplay  currentWord={currentWord}
                      gameOver={gameOver}
                      guessedLetter={guessedLetter}
                      />

        <Keyboard gameOver={gameOver}
                  letters={letters}
                  CheckLetter={CheckLetter}
                  guessedLetter={guessedLetter}
                  />

        <NewGameButton  gameOver={gameOver}
                        newGame={newGame}
                        />

        
      </div>
    </>
  )
}







