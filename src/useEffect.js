import { useState, useEffect } from "react";

function MyComp(){
  const [count, setCount] = useState(0);

  const change = () => {
    setCount(c => c + 1)
  }

  return (
    <div>
      <p>count : {count}</p>
      <button onClick={change}>add</button>
    </div>
  )
}
export default MyComp;