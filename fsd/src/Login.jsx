import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
export default function Login({regdata}) {
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const navigate=useNavigate();
  function verifydata(){
    alert(email)
    alert(password)
    if(email==regdata.userEmail){
      alert("user is valid")
      navigate('/dashboard');
    }
    else{
      alert("user is invalid")
    }
  }
  return (
    <div>
      <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" onChange={(e)=>setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" onClick={verifydata} class="btn btn-primary">Login</button>
  </form>
    </div>
  )
}