import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <div className="logo">
            <Link className='nav-link' to={"/"} > Codegrid</Link>
        </div>
        <div className="nav-links">
            <div className="nav-item">
                <div className="nav-link" to={"/"}>
                    Home
                </div>
            </div>
            <div className="nav-item">
                <div className="nav-link" to={"/About"}>
                    About
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
