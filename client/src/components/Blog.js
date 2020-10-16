import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Post from './Post'
import Background from '../images/office.jpg';


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
{/* Page Header */}
  <header className="masthead" style={{backgroundImage: `url(${Background})`}}
>
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>Clean Blog</h1>
              <span class="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>
   </div>
 );
}

export default Blog



