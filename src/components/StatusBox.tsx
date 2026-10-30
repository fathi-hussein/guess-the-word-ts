import type {JSX} from 'react'

type Props = {
  lostLang:string[]
  gameOver:boolean
  messages:string[]
  hasWon:boolean
  hasLost:boolean
  colors:string[]
}

export default function StatusBox({lostLang,gameOver,messages,hasWon,hasLost,colors}:Props):JSX.Element{

  return(
    <>
  {(lostLang.length>0 || gameOver ) && (
          <div className="status-box" style={gameOver? hasWon?{ backgroundColor:"#04b666"}:{ backgroundColor:"#e21912"}:{ backgroundColor: colors[lostLang.length - 1] }}>
          
            {!gameOver && <p>{messages[lostLang.length-1]}</p>}

            {gameOver && hasLost && (
              <>
                <h1>Game Over!</h1>
                <p>You lose! Better start learning assemply😎</p>
              </>
            )}

            {gameOver && hasWon && (
              <>
                <h1>You win!</h1>
                <p>Well done🎉</p>
              </>
            )}
         
          </div>)}
    </>
  )

}