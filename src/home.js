import { useState } from "react";
import BlogList from './blogList'

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


const Home = () => {
 const [blogs, setBlogs] = useState([
  {title: 'my blog', author: 'prince', body : 'lorem ipsum', id : 1},
  {title: 'news paper', author: 'nkuruniza', body : 'lorem ipsum', id : 2},
  {title: 'my blog', author: 'prince', body : 'lorem ipsum', id : 3}
 ]);
  return (  
    <div className="home">
      <BlogList blogs= {blogs} titles = 'all blogs'/>
      <BlogList blogs= {blogs.filter((blog) => blog.author === 'prince')} titles = "prince's blogs"/>
    </div>
  );
}
 
export default Home;