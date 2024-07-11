// const Home = () => {

//   let [count, setName] = useState(0);
//   const Greeting = (name) => {

//     setName(prevCount => prevCount + 1);
//        const short = name? 'hello ' + name: 'hello there'
//        console.log(short, count++);
//   }
//   return (  
//     <div className="home">
//       <h2>homepage</h2>
//       <p>{count}</p>
//       <button onClick={() =>{
//       Greeting('prince');
//       }}>click me</button>
//     </div>
//   );
// }
import { useState } from "react";
import BlogList from './blogList'; // Ensure this path is correct

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'my blog', author: 'prince', body: 'lorem ipsum', id: 1},
    {title: 'news paper', author: 'nkurunziza', body: 'lorem ipsum', id: 2},
    {title: 'my blog', author: 'prince', body: 'lorem ipsum', id: 3}
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  console.log("blogs state:", blogs); // Debugging statement

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} /> {/* Added handleDelete prop */}
      <BlogList blogs={blogs.filter((blog) => blog.author === 'prince')} title="Prince's Blogs" handleDelete={handleDelete} /> {/* Added handleDelete prop */}
    </div>
  );
}



////////////////////////////////////////////////////////////////////////////////////////////////////////

// function Car (props){
//   return <li> I am a {props.brand}</li>
// }

// function Garage (){
//   const cars = [
//     {brand:'ford', id:1},
//    { brand:'toyota', id:2},
//     {brand:'fuso' , id:3}
//   ];

//   return (
//     <ul>{cars.map(car => <Car brand = {car.brand} key = {car.key}/>)}</ul>
//   )
//  }

// Keys
// Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.

// Keys need to be unique to each sibling. But they can be duplicated globally.

// Generally, the key should be a unique ID assigned to each item. As a last resort, you can use the array index as a key.


export default Home;
