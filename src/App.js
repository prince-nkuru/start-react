// import Navbar from './navbar';
// import Home from './home';
// import Naming from './setName'
// import Counter from './counter'
// import MyComponent from './onChange';
// import ColorPicker from './colorPicker';
// import  MyObject from './object';
// import Foods from './array';
// import UpdateArray from './updateArray';

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

// function App (){
//   // const blog = '';
//   // const like = 80;
//   return (
//     <div className='App'>
//       <Navbar/>
//       <div className='content'>
//         <Home/>
//         {/* <h1>app content</h1> */}
//         {/* <h1>{blog? blog: 'no new blog'}</h1>
//         <p>liked {like} times</p>              {/* boolean and object are not used as variable ?? */}
//         {/* <p>{Math.floor(Math.random() * 10)}</p>  */}

//         <Naming greet = 'is doing great'/>
//         <Counter/>
//         <MyComponent/>
//         <ColorPicker/>
//         <MyObject/>
//         <Foods/>

//         <UpdateArray/>
//       </div>
      
//     </div>
//   )
// }
// export default App

   import TodoList from "./todoList" 

function App (){
  
    return (
      <>
      <div>
        <TodoList/>
      </div>
      </>
    )
  }
  export default App
  



