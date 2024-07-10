const BlogList = (blogs, titles, handleDelete) => {

  // const blogs = props.blogs;
  // const titles = props.titles;


  return ( 
    
    <div className="home">
      <h1>{titles}</h1>
    {blogs.map((blog) => (
     
      <div className="blog-preview" key={blog.id}>
        
        <h2>{blog.title}</h2>
        <p> Written by {blog.author}</p>
        <button onClick={() => handleDelete(blog.id)}>remove blog</button>
      </div>
     ))}
    
  </div>
  
  
)}

 
export default BlogList;