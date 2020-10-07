import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
 return (
  <div className="container">
    <div class="jumbotron">
     <h1 class="display-4">Welcome to myBlog</h1>
     <p class="lead">This is a personal blog detailing my growth as a developer and topics I care about.</p>
     <hr class="my-4"/>
     <p>To see the library of my Posts click the button below.</p>
     <Link class="btn btn-primary btn-lg" to='/blog' role="button">Go To Post</Link>
    </div>
  </div>
 )
}

export default Home
