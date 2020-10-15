import React from 'react'
import {Link} from 'react-router-dom'

const Post = (props) => {


 const renderDate = (dateString) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const date = new Date(dateString);
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

const renderTags = (tags) => {
  return tags.map(tag => {
    return(<Link key={tag}>{`${tag} `}</Link>)
  })
}

const handleClick = (id) => {
 window.location.pathname = `/posts/${id}`
}

const {post} = props

 return (
  <button onClick = {() => handleClick(post._id)} className="col p-4 d-flex flex-column position-static">
    <strong className="d-inline-block mb-2 text-primary">{renderTags(post.tags)}</strong>
    <h3 className="mb-0">{post.title}</h3>
    <div className="mb-1 text-muted">{post.createdAt ? renderDate(post.createdAt) : null}</div>
    <p className="card-text mb-auto">{ !post.excerpt ? null : post.excerpt}</p>
    <Link onClick={() => handleClick(post._id)} >Continue reading</Link>
  </button>
 )
}

export default Post
