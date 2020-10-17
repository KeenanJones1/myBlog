import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
 return (
  <div className="container">
    <div className="jumbotron">
     <h1 className="display-4"> <br/> My name is Keenan Jones</h1>
     <p className="lead">I'm a full stack developer from Chicago, IL. This is my blog where I write about useful knowledge I'd like to share with the World. </p>
     <hr className="my-4"/>
     <p>To see the archive of my artclies click the button below.</p>
     <Link className="btn btn-primary btn-lg" to='/blog' role="button">Archive</Link>
    </div>
  </div>
 )
}

export default Home
