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
    const incomingBlogs = res.data

    let sorted_posts = incomingBlogs.sort((a,b) => {
      return new Date(a.createdAt).getTime() - 
          new Date(b.createdAt).getTime()
    }).reverse();

    setBlogs(sorted_posts);
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
                <h1>Welcome to myBlog</h1>
                <span class="subheading">I'm a full stack developer from Chicago. This is my blog, I write about useful knowledge I'd like to share with the World.</span>
              </div>
            </div>
          </div>
        </div>
    </header>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          {renderBlogs()}
        </div>
      </div>
    </div>
   </div>
 );
}

export default Blog


