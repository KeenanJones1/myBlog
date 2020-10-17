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
<div class="col p-4 d-flex flex-column position-static">
  <div class="post-preview">
    <Link onClick={() => handleClick(post._id)}>
    <h2 class="post-title">
    {post.title}
    </h2>
    <h3 class="post-subtitle">
    { !post.excerpt ? null : post.excerpt}    </h3>
    </Link>
    <p class="post-meta"> Posted by Keenan Jones on { post.createdAt ? renderDate(post.createdAt) : null }</p>
  </div>
  <div><hr /></div>
</div>
 )
}

export default Post


{/* <strong class="d-inline-block mb-2 text-success">{renderTags(post.tags)}</strong>
  <h3 class="mb-0">{post.title}</h3>
  <div class="mb-1 text-muted">{post.createdAt ? renderDate(post.createdAt) : null}</div>
  <p class="mb-auto">{ !post.excerpt ? null : post.excerpt}</p>
  <Link onClick={() => handleClick(post._id)} >Continue reading</Link> */}