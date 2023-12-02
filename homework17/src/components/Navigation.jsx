import React from 'react'
import { Link } from 'react-router-dom'
function Navigation() {
  return (
    <div className='nav'>
        <Link to='/'>Main</Link>
        <Link to='/about'>About</Link>
        <Link to='/1'>Fact</Link>
    </div>
  )
}

export default Navigation