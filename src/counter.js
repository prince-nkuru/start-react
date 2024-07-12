import {useState} from 'react'

 function Counter (){
  const [count, setCount] = useState(0);

  const increment = () => {
    // good practice to use updater function
    setCount(count => count + 1) 
    setCount(count => count + 1) 
    setCount(count => count + 1) 
  }

  const decrement = () => {
    setCount(count => count - 1)
  }

  const reset = () => {
     setCount(0)
  }

  return (
    <div className='container'>
      <div>
      <p className='counterDisplay'>{count}</p>
      </div>
     
     <div className='buttonGroup'>
     <button className='decrement' onClick={decrement}>decrease</button>
     <button className='decrement' onClick={reset}>reset</button>
     <button className='decrement' onClick={increment}>increase</button>
     </div>
    
    </div>
  )
 }

 export default Counter