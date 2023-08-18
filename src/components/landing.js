import React from 'react'
import { Link } from 'react-router-dom';
import authimg from './auth.png'

function Landing() {
  return (
    <>
        <div className="container flex justify-center items-center bg-slate-900">
           <div className='flex flex-col  items-center border-2 mx-40 p-10 md:mx-96 space-y-5'>
                <img src={authimg} className="w-40 py-10" alt=""/>
                <div className="buttons flex space-x-40 ">
                        <Link to="/login" className="bg-blue-500 px-6 py-2 rounded-md">Login</Link>
                        <Link to="/signup" className="bg-blue-500 px-6 py-2 rounded-md">Signup</Link>
                </div>
           </div>
        </div>
    </>
  )
}

export default Landing
