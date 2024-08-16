import { useState } from 'react'
import './App.css'

function App() {
  const [link, setLink] = useState("")


  const validateLink = () => {
    const regEx = new RegExp("https://vider.info/embed/video/.*")
    
    return regEx.test(link)
  }

  return (
    <>
      <h1>Video Player</h1>
      <div onChange={(e)=>{setLink(e.target.value)}}>
        <input type="text" name="linkToFilm" value={link} placeholder='Put link'/>
      </div>

      <div className="filmContainer">
          {!validateLink() && link !== "" ? "Wrong Link" : ""}  
          {link == "" && !validateLink() ? "No video to display" : ""}
          {validateLink() && link !== "" ? <iframe src={link} width="1024" height="600" 
    allowfullscreen="true" allowscriptaccess="always"/> : ""}
  
      </div> 
      
    </>
  )
}

export default App
