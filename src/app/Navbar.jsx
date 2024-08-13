import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
         <Link to='/' className='navbar-link'>Home</Link>  
         <Link to='/favorites' className='navbar-link'>Favorites</Link> 
         
        </div>
        </nav>
 )
}

export default Navbar