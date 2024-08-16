import { useState } from 'react'
import './App.css'

function App() {
  const [link, setLink] = useState("")
  const [isStarted, setIsStarted] = useState(false)
  const [isError, setIsError] = useState(false)


  const validateLink = () => {
    const regEx = new RegExp("https://vider.info/embed/video/.*")
    
    return regEx.test(link)
  }

  const startSession = () => {
    if (validateLink()) {
      setIsStarted(true)
    } else{
      setIsError(true)
    }
  }

  return (
    <>
      <h1>Video Player</h1>
      <div onChange={(e)=>{setLink(e.target.value); setIsError(false)}}>
        <p><input type="text" name="linkToFilm" value={link} placeholder='Put link'/></p>
        <button onClick={()=>{
          startSession()
        }}>Start</button>
      </div>

      <div className="filmContainer">
          {isStarted ? <iframe src={link} width="1024" height="600" 
    allowfullscreen="true" allowscriptaccess="never"/> : ""}
          {isError ? "Wrong link" : ""}
      </div> 
      
    </>
  )
}

export default App
