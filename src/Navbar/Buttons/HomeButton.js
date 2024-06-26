import React from 'react'
import { Link } from 'react-router-dom'

const HomeButton = () => {
  return (
    <div>
      <Link to='/home'>
        <button> Home </button>
      </Link>
    </div>
  )
}

export default HomeButton