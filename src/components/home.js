import React from 'react'
import { useLocation } from 'react-router-dom'

function Home() {
  const location = useLocation()
  return (
    <div className='home container text-center m-auto '>
       <p className='text-3xl'>Welcome {location.state.id} to auth app . You have succcessfully Logged into Auth App</p>
    </div>
  )
}

export default Home
