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
      position: 'relative', 
      overflow: 'hidden' 
    }}>
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      >
        <source src="https://videos.pexels.com/video-files/3141210/3141210-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Heading />
      <Display val={calval} />
      <Button clickme={onclick} />
    </div>
  )  
}

export default App
