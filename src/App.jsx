import Heading from './components/head'
import Display from './components/input'
import Button from './components/buttons'
import './App.css'
import { useState } from 'react'

function App() {
  const [calval, setval] = useState("");
  const onclick = (e) => {
    if (e === "C") {
      setval("");
    } else if (e === "=") {
      try {
        setval(eval(calval)); 
      } catch {
        setval("Error");
      }
    } else {
      setval(calval + e);
    }
  }

  return (
    <div className="App" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      backgroundColor: '#f0f0f0', 
      padding: '20px', 
      boxSizing: 'border-box' 
    }}>
      <Heading />
      <Display  val={calval} />
      <Button clickme={onclick} />
    </div>
  )
  
}

export default App
