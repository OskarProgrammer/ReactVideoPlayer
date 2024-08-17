import { useState } from 'react'
import './App.css'

function App() {
  const [link, setLink] = useState("")
  const [isStarted, setIsStarted] = useState(false)
  const [isError, setIsError] = useState(false)


  const validateLink = () => {
    const validatedSites = ["vider.info/embed/video/", "www.youtube.com/embed/"]

    for (const site of validatedSites){
      const regEx = new RegExp(`${site}.*`)
      if (regEx.test(link)) {
        return true
      }

    }
    return false
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
      <div>
        <p><input onChange={(e)=>{setLink(e.target.value); setIsError(false)}} type="text" name="linkToFilm" value={link} placeholder='Put link'/></p>
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
