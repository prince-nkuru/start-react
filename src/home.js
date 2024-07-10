const Home = () => {
  const Greeting = (name, e) => {
       const short = name? 'hello ' + name: 'hello there'
       console.log(short, e.target);
  }
  return (  
    <div className="home">
      <h2>homepage</h2>
      <button onClick={(e) =>{
      Greeting('prince', e);
      }}>click me</button>
    </div>
  );
}
 
export default Home;