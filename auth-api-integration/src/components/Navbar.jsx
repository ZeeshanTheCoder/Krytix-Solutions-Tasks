import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src="/Logo.png" alt="Logo" className="logo" />
      </NavLink>
      {/* logout */}

    </nav>
  )
}

export default Navbar
