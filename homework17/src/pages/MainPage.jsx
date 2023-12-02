import React from 'react'
import { Link } from 'react-router-dom'
import Johan from '../assets/johan.png'

function MainPage() {
  return (
    <div>
        <h1>Main Page</h1>

        <div style={{maxWidth: "400px"}}> 
            <img src={Johan} alt={`${Johan} is one of the main characters form "Monster"`} style={{width: "100%"}}/>
        </div>
        <h2>Johan Liebert</h2>
    </div>
  )
}

export default MainPage