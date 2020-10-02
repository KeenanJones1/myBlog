import React, { Component } from 'react'

export default class Drafts extends Component {
 constructor(){
  super()
  this.state = {
   posts: ""
  }
 }

componentDidMount(){
 fetch('http://localhost:8000/posts')
 .then( resp => resp.json())
 .then(data => console.log(data))
}


 render() {
  return (
   <div>
    
   </div>
  )
 }
}
