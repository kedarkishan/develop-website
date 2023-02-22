import React from 'react'
import { useState  } from "react";
import { NavLink } from 'react-router-dom';
export const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [allEntry, setAllEntry] = useState([]);
   const submitForm = (e)=>{
         e.preventDefault();
         const newEntry= {email:email,password:password};
         setAllEntry([...allEntry,newEntry]);
   }
  return (
    <div className='conatiner1'>
    <div className='login'>
    <h1 className="text-center"><b>Login</b></h1>
    
    <form onSubmit={submitForm} className="needs-validation">
        <div className="form-group was-validated">
            <label className="form-label" htmlFor="email">Email address</label>
            <input className="form-control" type="email" id="email" required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <div className="invalid-feedback">
                Please enter your email address
            </div>
        </div>
        <div className="form-group was-validated">
            <label className="form-label" htmlFor="password">Password</label>
            <input className="form-control" type="password" id="password" required
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
            />
            <div className="invalid-feedback">
                Please enter your password
            </div>
        </div>
        <div className="form-group form-check">
            <input className="form-check-input" type="checkbox" id="check"/>
            <label className="form-check-label" htmlFor="check">Remember me</label>
        </div>
      
        <input className="btn  btn-success w-50 " type="submit" value="SIGN IN"/>
      <div><NavLink style={{color:'black'}} to='/Signup'>Not Yet Registered ?</NavLink></div>
        
    </form>
</div>
  
</div>
  )
}
