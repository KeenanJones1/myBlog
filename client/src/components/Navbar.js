import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = props => {
 return (
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to='/'>myBlog</Link>

  <Link className="navbar-brand" exact to='/keenan'>Keenan Jones</Link>
 </nav>
 )
}



export default Navbar
