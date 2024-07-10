import { useState } from "react";

const Home = () => {

  const [name, setName] = useState('prince');
  const Greeting = (name, e) => {

    setName('nkurunziza');
       const short = name? 'hello ' + name: 'hello there'
       console.log(short, e.target);
  }
  return (  
    <div className="home">
      <h2>homepage</h2>
      <p>{name}</p>
      <button onClick={(e) =>{
      Greeting('prince', e);
      }}>click me</button>
    </div>
  );
}
 
export default Home;