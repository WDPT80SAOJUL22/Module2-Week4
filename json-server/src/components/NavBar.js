import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Link to='/'> HOME </Link>
        <Link to='new'> NEW PRODUCT</Link>
    </div>
  )
}

export default NavBar