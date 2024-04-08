import React, { useState } from 'react'
import './LoginSignup.css'
import email_icon from '../Assests/email.png'
import user_icon from '../Assests/user.png'
import pass_icon from '../Assests/pass.png'
export const LoginSignup = () => {
    const [action,setAction]=useState("Sign Up");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
<div className="inputs">
  {action==="Login"?<div></div>:<div className="input">
        <img src={user_icon} alt="name" />
        <input type="text" placeholder='Enter your name' />
    </div>}
  
    <div className="input">
        <img src={email_icon} alt="email" />
        <input type="email" placeholder='Enter your Email'/>
    </div>
    <div className="input">
        <img src={pass_icon}alt="password" />
        <input type="password" placeholder='Enter your Password'/>
    </div>
</div>
{action==="sign up"?<div></div>:<div className="forget-password">Lost password?<span>Click Here !</span></div>
}

<div className="submit-container">
    <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
    <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
</div>
    </div>
  );
};
export default LoginSignup
