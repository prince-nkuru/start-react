import { useState, useEffect } from "react";

function DigitalClock(){

  const [clock, setClock] = useState(new Date())

  useEffect(()=> {
    const intervalId = setInterval(() => {
      setClock(new Date())
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, [])


  function formatTime (){
    let hours = clock.getHours();
    const min = clock.getMinutes();
    const seconds = clock.getSeconds();
    const meridian = hours > 12 ? "PM": 'AM';
    const formattedMin = min < 10? `0${min}` :  `${min}`;
    const formattedSec = seconds < 10? `0${seconds}` :  `${seconds}`

    hours = hours % 12 || 12;

    return `${hours} : ${formattedMin} : ${formattedSec}  ${meridian}`
  }
  return (
  <div className="clock-container">
    <div className="clock">
      <span>clock: {formatTime()}</span>
     </div>
  </div>
  )
}

export default DigitalClock;