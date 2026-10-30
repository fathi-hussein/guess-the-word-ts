
import type {JSX} from 'react'

type Props = {
  languages:string[]
  lostLang:string[]
}

export default function LanguageChips({languages,lostLang}:Props):JSX.Element{

  return(
   
      <div className="core-cont">
          {languages.map(lang=>(<button key={lang} className={lostLang.includes(lang)?'core-buttons left':'core-buttons'}>{lang}</button>))}
      </div>
    
  )
}