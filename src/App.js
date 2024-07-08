import Navbar from './navbar';
import Home from './home';

// function Square({ value }) {
//   return <button className="square">{value}</button>;
// }

// export default function Board() {
//   return (
//     <>
//       <div className="board-row">
//         <Square value="1" />
//         <Square value="2" />
//         <Square value="3" />
//       </div>
//       <div className="board-row">
//         <Square value="4" />
//         <Square value="5" />
//         <Square value="6" />
//       </div>
//       <div className="board-row">
//         <Square value="7" />
//         <Square value="8" />
//         <Square value="9" />
//       </div>
//     </>
//   );
// }

function App (){
  const blog = '';
  const like = 80;
  return (
    <div className='App'>
      <Navbar/>
      <div className='content'>
        <Home/>
        {/* <h1>app content</h1> */}
        {/* <h1>{blog? blog: 'no new blog'}</h1>
        <p>liked {like} times</p>              {/* boolean and object are not used as variable ?? */}
        {/* <p>{Math.floor(Math.random() * 10)}</p>  */}
      </div>
    </div>
  )
}
export default App

