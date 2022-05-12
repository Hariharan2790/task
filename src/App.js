import React, { useState } from 'react'
import './App.css';
import CreateSquare from './CreateSquare'

function App() {
  const [isClick, setIsClick] = useState(false);
  
  const handleClick =()=>{
    setIsClick(true);
    
  }
  return (
    <div className="Boxsplit">
      <h1>Boxsplit</h1>
      <div className="boxboard" onClick={handleClick}>
        {isClick ? <CreateSquare/> : ""}
      </div>
      
    </div>
  );
}

export default App;
