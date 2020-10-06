import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Blog = () => {
 const [blogs, setBlogs] = useState([]);
 const [featuredBlog, setFeaturedBlog] = useState([]);

 useEffect(() => {
  const fetchData = async () => {
   try{
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`)
    setFeaturedBlog(res.data[0]);
   }
   catch(err) {}
  }
  fetchData();
 }, []);


 useEffect(() => {
  const fetchPosts = async () => {
   try{
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`)
    setBlogs(res.data)
   }
   catch(err) {}
  }
  fetchPosts();
 }, []);

 const capitalizeFirstLetter = (word) => {
  if(word)
   return word.charAt(0).toUpperCase() + word.slice(1);
  return '';
 }

 const getBlogs = 
 return (

 );
};

export default Blog
