const Navbar = () => {
  return (  
   <nav className="navbar">
    <h1>new navbar</h1>
    <div className="link">
      <a href="/">home</a>
       <a href="/create">blog</a>   {/*style={{
        color: 'white',
        backgroundColor: '#f1356d'
      }} */}
      {/* you may also use inline styling  */}
    </div>
   </nav>
  );
}
 
export default Navbar;