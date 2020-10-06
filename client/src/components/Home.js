import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
 return (
  <div className="container">
   <div className="jumbotron mt-5">
     <h1 className="display-4">Welcome to myBlog</h1>
     <p className="lead">My personal blog to express my interest of various topics.</p>
     <hr className="my-4"/>
     <p>Click button to check out blog posts.</p>
     <Link to="/blog" className="btn btn-primary btn-lg" role="button">Check Out Posts</Link>
   </div>
  </div>
 )
}

export default Home
