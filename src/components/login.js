import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios'

function Login() {
  const history=useNavigate();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  async function submit(e){
    e.preventDefault();
    try{
      await axios.post("http://localhost:3000/login",{
        email,password
      }).then(res=>{
        if(res.data==="exists"){
          alert("your are successfully logged in")
          history("/home",{state:{id:email}})
        }
        else if(res.data==="notexist"){
          alert("You need to sign up")
        }
      }).catch(e=>{
        alert("wrong details");
        console.log(e);
      })
    }
    catch(e){
      console.log(e);
    }
  }

  return (
    <div className="container flex  justify-center items-center ">
      <div className='login px-16 py-6 rounded-lg bg-slate-200 space-y-4'>
        <h1 className='text-2xl my-6'>Log in</h1>
        <form action="POST" className='flex flex-col space-y-10'>
          <input type="email" className="p-2 rounded-md " onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"/>
          <input type="password" className="p-2 rounded-md " onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
          <input type="submit" className="bg-blue-500 w-fit mx-auto px-2 py-1 cursor-pointer rounded-md" onClick={submit}/>
        </form>
        <p>OR</p>
        <div>
          <Link to="/signup" className="bg-green-400 w-fit mx-auto px-2 py-1 cursor-pointer rounded-md">Create New Account</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
