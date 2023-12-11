import React from 'react'
import { Outlet } from 'react-router-dom'


function Layouts() {
  return (
    <div>
        <Outlet></Outlet>
    </div>
  )
}

export default Layouts