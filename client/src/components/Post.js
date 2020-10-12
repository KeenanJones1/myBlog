import React from 'react'

const Post = (props) => {

 const renderDate = (dateString) => {
 const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 const date = new Date(dateString);
 return `${months[date.getMonth()]}${date.getDate()}, ${date.getFullYear()}`
}

const renderTags = (tags) => {
  return tags.map(tag => {
    return(<span key={tag}>{`${tag} `}</span>)
  })
}

const handleClick = (id) => {
 window.location.pathname = `/posts/${id}`
}


const {post} = props

 return (
   <button onClick={() => handleClick(post._id)}>
     <h3>{post.title}</h3>
     <span>{!post.createAt ? null : renderDate(post.createAt)}</span>
     <div>{renderTags(post.tags)}</div>
   </button>
 )
}

export default Post
