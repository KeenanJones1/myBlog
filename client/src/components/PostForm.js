import React, { Component } from 'react'

export default class PostForm extends Component {
 render() {
  return (
   <div>
    <form action="" method="post">
     <label htmlFor="title">Title</label>
     <input type="text" name="title" id=""/>
     <label htmlFor="body">Tell us about yourself...</label>
     <textarea type="text" name="body" id=""/>
     <input type="submit" value="Post"/>
    </form>
   </div>
  )
 }
}
