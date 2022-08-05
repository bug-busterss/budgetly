import Demo from "./Components/Modal"
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
    <Demo/>
    </div>  
  )
}

export default App
