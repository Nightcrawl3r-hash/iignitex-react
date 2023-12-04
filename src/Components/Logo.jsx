import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <NavLink to='/'>
        <p className="text-3xl  font-semibold text-blue-600">Iignite<span className='text-[#dc2626]'>X</span></p>
    </NavLink>
  )
}

export default Logo