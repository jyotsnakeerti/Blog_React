import React from 'react'
import Logo from "../img/Blog.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo-img" />
        </div>
        <div className="links">
          <Link className='link' to="/?cat=art">
            <h6>Recipe</h6>
          </Link>
          <Link className='link' to="/?cat=travel">
            <h6>Travel</h6>
          </Link>
          <Link className='link' to="/?cat=lifestyle">
            <h6>Lifestyle</h6>
          </Link>
          <Link className='link' to="/?cat=craft">
            <h6>Crafts</h6>
          </Link>
          <Link className='link' to="/?cat=fashion">
            <h6>Fashion</h6>
          </Link>
          <span>Keerti</span>
          <span>Logout</span>
          <span className='write'>
            <Link className='link' to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
