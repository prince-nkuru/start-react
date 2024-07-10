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


// import { useState } from "react";
// import BlogList from './blogList'




// const Home = () => {
//  const [blogs, setBlogs] = useState([
//   {title: 'my blog', author: 'prince', body : 'lorem ipsum', id : 1},
//   {title: 'news paper', author: 'nkurunziza', body : 'lorem ipsum', id : 2},
//   {title: 'my blog', author: 'prince', body : 'lorem ipsum', id : 3}
//  ]);

//  const handleDelete = (id) => {
//   const newBlogs = blogs.filter(blog => blog.id !== id)
//   setBlogs(newBlogs)
//  }
//   return (  
//     <div className="home">
//       <BlogList blogs= {blogs} titles = 'all blogs' handleDelete={handleDelete}/>
//       <BlogList blogs= {blogs.filter((blog) => blog.author === 'prince')} titles = "prince's blogs" handleDelete = {handleDelete}/>
//     </div>
//   );
// }
 
// export default Home;

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

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} /> {/* Added handleDelete prop */}
      <BlogList blogs={blogs.filter((blog) => blog.author === 'prince')} title="Prince's Blogs" handleDelete={handleDelete} /> {/* Added handleDelete prop */}
    </div>
  );
}

export default Home;
