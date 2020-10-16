import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Post from './Post'

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState([]);
  useEffect( () => {
   const FetchData = async () => {
   try{
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);
    setBlogs(res.data);
    setFeaturedBlog(res.data[res.data.length -1])
   }
   catch(err){
   }
  }
   FetchData();
  }, []);


  const capitalizeFirstLetter = (word) => {
   if(word)
   return word.charAt[0].toUpperCase() + word.slice(1)
  return '';
  };

 

  const renderBlogs = () => {
     return blogs.map(post => {
     return <Post key={post._id} post={post}/>
    })
  }



 return (
   <div className="container">
     <div class="jumbotron p-4 p-md-5 text-white rounded bg-dark">
      <div class="col-md-6 px-0">
        <h1 className="display-4">Welcome to myBlog <br/> My name is Keenan Jones</h1>
        <p className="lead">I'm a full stack developer from Chicago, IL. This is my blog where I write about useful knowledge I'd like to share with the world. </p>
      </div>
  </div>
    <div class="row mb-2">
    <div class="col-md-6">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">{featuredBlog.tags}</strong>
          <h3 class="mb-0">{featuredBlog.title}</h3>
          <div class="mb-1 text-muted">{featuredBlog.createdAt}</div>
          <p class="card-text mb-auto">{featuredBlog.excerpt}</p>
          <a href="#" class="stretched-link">Continue reading</a>
        </div>

        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div>
      </div>
    </div>
    
    <div class="col-md-6">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success">Design</strong>
          <h3 class="mb-0">Post title</h3>
          <div class="mb-1 text-muted">Nov 11</div>
          <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div>
      </div>
    </div>
  </div>

     {renderBlogs()}
   </div>
 );
}

export default Blog
