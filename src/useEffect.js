import { useState, useEffect } from "react";

function MyComp(){
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green')
  const [width, setWidth] = useState(window.innerWidth)
  const [heigth, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    // document.title = `count: ${count}`
  }, [count])

  const change = () => {
    setCount(c => c + 1)
  }
  const changeColor = () => {
    setColor(c => c === 'green'? 'red' : 'green')
  }
  const Resize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  return (
    <div>
      <p style={{color: color}}>count : {count}</p>
      <button onClick={change}>add</button>
      <button onClick={changeColor}>color</button>
    </div>
  )
}
export default MyComp;