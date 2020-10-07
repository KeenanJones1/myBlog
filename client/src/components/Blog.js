import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeatureBlog] = useState([]);

  useEffect( () => {
   const FetchData = async () => {
   try{
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);
    setFeatureBlog(res.data[0]);
    console.log(res.data)
   }
   catch(err){

   }
  }
   FetchData();
  }, []);



  useEffect( () => {
   const fetchBlogs = async () => {
   try{
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);
    setBlogs(res.data);
   }
   catch(err){
   }
  }

   fetchBlogs();
  }, []);

  const capitalizeFirstLetter = (word) => {
   if(word)
   return word.charAt[0].toUpperCase() + word.slice(1)
  return '';
  };

  const getBlogs = () => {

  }

 return (
  <div className="container mt-3">
   <div className="nav-scroller py-1 mb-2">
    <nav className="nav d-flex justify-content-between">
      <Link className="p-2 text-muted" to='/category/world'>World</Link>
      <Link className="p-2 text-muted" to='/category/world'>U.S.</Link>
      <Link className="p-2 text-muted" to='/category/world'>Technology</Link>
      <Link className="p-2 text-muted" to='/category/world'>Design</Link>
      <Link className="p-2 text-muted" to='/category/world'>Culture</Link>
      <Link className="p-2 text-muted" to='/category/world'>Business</Link>
      <Link className="p-2 text-muted" to='/category/world'>Politics</Link>
      <Link className="p-2 text-muted" to='/category/world'>Opinion</Link>
      <Link className="p-2 text-muted" to='/category/world'>Science</Link>
      <Link className="p-2 text-muted" to='/category/world'>Health</Link>
      <Link className="p-2 text-muted" to='/category/world'>Style</Link>
      <Link className="p-2 text-muted" to='/category/world'>Travel</Link>
    </nav>
   </div>
   <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
    <div className="col-md-6 px-0">
 <h1 className="display-4 font-italic">{featuredBlog.title}</h1>

 {/* Make an execerpt fieild in the Post */}
 {/* Btw make a category model  */}
      <p className="lead my-3">{featuredBlog.exerpt}</p>
      <p className="lead mb-0"><Link to='/' className="text-white font-weight-bold">Continue reading...</Link></p>
    </div>
   </div>
  </div>
 );
}

export default Blog
