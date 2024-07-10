const Home = () => {
  const Greeting = (name) => {
       const short = name? 'hello ' + name: 'hello there'
       console.log(short);
  }
  return (  
    <div className="home">
      <h2>homepage</h2>
      <button onClick={() =>{
      Greeting();
      }}>click me</button>
    </div>
  );
}
 
export default Home;