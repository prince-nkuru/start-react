import { useState } from "react";

const Home = () => {

  let [count, setName] = useState(0);
  const Greeting = (name) => {

    setName(prevCount => prevCount + 1);
       const short = name? 'hello ' + name: 'hello there'
       console.log(short, count++);
  }
  return (  
    <div className="home">
      <h2>homepage</h2>
      <p>{count}</p>
      <button onClick={() =>{
      Greeting('prince');
      }}>click me</button>
    </div>
  );
}
 
export default Home;