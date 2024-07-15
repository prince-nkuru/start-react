import { useState, useEffect } from "react";

function DigitalClock(){

  const [clock, setClock] = useState('00:00')

  const handleClock = () => {
    setClock('00:01');
  }

  useEffect(()=> {
    console.log('changed');
  })
  return (
  <div className="clock-container">
    <div className="clock">
      <span>clock: {clock}</span>
      <button onClick={handleClock}>add</button>
    </div>
  </div>
  )
}

export default DigitalClock;