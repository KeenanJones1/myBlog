import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeatureBlog] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect( () => {
   const FetchData = async () => {
   try{
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);
    setFeatureBlog(res.data[0]);

    for( let i = 0; i < res.data.length; i++){
     if( res.data[i].tags.length > 1){
      for( let j = 0; j < res.data[i].tags.length; j++){
       setCategories(categories.push(res.data[i].tags[j]))
      }
     }else{
      setCategories(categories.push(res.data[i].tags[0]))
     }
    }
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

  const getCategories = () => {

  }

  const renderCategories = () => {
   
  }


 return (
  <div className="container mt-3">
   {/* This needs to recieve db.bios.find( { "tag": "ruby" } ) when directed to the route */}
   <div className="nav-scroller py-1 mb-2">
    <nav className="nav d-flex justify-content-between">
      <Link className="p-2 text-muted" to='/category/ruby'>Ruby</Link>
      <Link className="p-2 text-muted" to='/category/javascript'>JavaScript</Link>
      <Link className="p-2 text-muted" to='/category/react'>React</Link>
      <Link className="p-2 text-muted" to='/category/backend'>Backend</Link>
      <Link className="p-2 text-muted" to='/category/frontend'>Frontend</Link>
      <Link className="p-2 text-muted" to='/category/design'>Design</Link>
      <Link className="p-2 text-muted" to='/category/culture'>Culture</Link>
      <Link className="p-2 text-muted" to='/category/business'>Business</Link>
      <Link className="p-2 text-muted" to='/category/politiics'>Politics</Link>
      <Link className="p-2 text-muted" to='/category/health'>Health</Link>
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
