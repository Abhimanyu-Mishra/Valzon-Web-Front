import React from 'react'
import "../Style/Login.css"
import ClearIcon from '@mui/icons-material/Clear';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
 const navigation = useNavigate()
const submitHand =()=>{
  axios.get("http://localhost:8000/register")
  .then((res)=>{console.log(res.data);})
}
  return (
    <div>
    <div className='log-in-form'>
      <div className='heading-text'>
        <div className='log'>LogIn</div>
       <Link to={"/"}><ClearIcon/></Link> 
      </div>
      <form className='form' action='#' onSubmit={submitHand}>
        <input className='full-size-input' type='text' id='user-name' placeholder='UserName' required /><br></br>
        <input className='full-size-input' type='password' id='password' placeholder='Password' required /><br></br>
        <span className='flex-using'>
         <span><input type="checkbox" /> Remember </span>
        <span>Forgot Password?</span>
        </span>
        <button type='submit' id='loginbutton' >LogIn</button>
        <Link to={"/signup"}><span className='dont-have-ac'>Dont't Have an Account ?</span></Link>
      </form>
    </div>
    </div>
  )
}

export default Login

