import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Post from './Post'

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

 

  const renderBlogs = () => {
     return blogs.map(post => {
     return <Post key={post._id} post={post}/>
    })
  }


 return (
   <div className= "container">
     {renderBlogs()}
   </div>
 );
}

export default Blog
