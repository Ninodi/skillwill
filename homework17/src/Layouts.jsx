import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './components/Navigation'

function Layouts() {
  return (
    <div className='container'>
        <Navigation />
        <Outlet></Outlet>
    </div>
  )
}

export default Layouts