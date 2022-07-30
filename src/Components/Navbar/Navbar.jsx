import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {

  let navigate = useNavigate()

  return (
    <nav>
      <span className='navbar__logo' onClick={()=>navigate(`/`)}>
        Recipeo
      </span>
    </nav>
  )
}

export default Navbar