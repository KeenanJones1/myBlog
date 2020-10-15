import React, {useState, useEffect} from 'react'
import axios from 'axios'


const PostDetails = (props) => {
 const [postDetails, setPostDetails] = useState({});

 const [tags, setPostTags] = useState([])

 useEffect(() => {
  const fetchPost = async () => {
   try{
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts/${props.match.params.id}`
    );
    setPostDetails(res.data)
    setPostTags(res.data.tags)
   }
   catch(err){
    
   }
  }
  fetchPost();
 }, {});

const renderHTML = () => {
 return{ __html: postDetails.body}
}

 
 
const renderPost = () => {
 return (<div dangerouslySetInnerHTML={renderHTML()}>
 </div>)
}


 return (
  <div>
   {renderPost()}
  </div>
 )
}

export default PostDetails
