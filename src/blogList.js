// const BlogList = (blogs, titles, handleDelete) => {

//   // const blogs = props.blogs;
//   // const titles = props.titles;


//   return ( 
    
//     <div className="home">
//       <h1>{titles}</h1>
//     {blogs.map((blog) => (
     
//       <div className="blog-preview" key={blog.id}>
        
//         <h2>{blog.title}</h2>
//         <p> Written by {blog.author}</p>
//         <button onClick={() => handleDelete(blog.id)}>remove blog</button>
//       </div>
//      ))}
    
//   </div>
  
  
// )}

 
// export default BlogList;


const BlogList = ({ blogs, title, handleDelete }) => { // Added handleDelete to props
  console.log("blogs prop:", blogs); // Debugging statement
  if (!Array.isArray(blogs)) {
    console.error("blogs is not an array:", blogs);
    return null;
  }

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete</button> {/* Added delete button */}
        </div>
      ))}
    </div>
  );
}

export default BlogList;
