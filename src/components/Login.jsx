import React, { useEffect, useState } from 'react';
import '../assests/css/globals.css';
import img from '../assests/images/img.png';
import { useNavigate } from 'react-router-dom';
import useLoginHook from '../hooks/useLoginHook'

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [trigger,setTrigger]=useState(false);
    const auth=localStorage.getItem('authenticated');
    const navigate = useNavigate();

    useLoginHook({trigger,name,email,password,setName,setEmail,setPassword})

    useEffect(()=>{
        console.log(auth);
        
        if(auth==="true")
        {
            console.log(1);
            
            navigate("/success");
        }
        // eslint-disable-next-line
    },[])

    return (
        <div className='main-container'>
            <div className='main-left'>
                <h1>Welcome Back</h1>
                <p>Welcome back! Please enter your details</p>
                <h3>Name</h3>
                <input type="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder={`Enter your Name`}/>
                <h3>Email</h3>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder={`Enter your Email`}/>
                <h3>Password</h3>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder={`Enter your Password`}/>
                <div className="flex1">
                    <div className="flex">
                        <input type="checkbox" />
                        <p>Remember for 30 days</p>
                    </div>
                    <div>
                        <p>Forgot password</p>
                    </div>
                </div>
                <div>
                    <button onClick={()=>setTrigger(trigger===false?true:false)}>{isSignIn === 1 ? "Sign In" : "Sign Up"}</button>
                </div>
                <div>
                    <button className="google-sign-in-button">
                    <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" className="google-logo" />
                    Sign in with Google
                    </button>
                </div>
                {isSignIn === 1 ? <div>
                    Don't have an account?
                    <button onClick={() => setIsSignIn(0)}>Sign Up</button>
                </div> : <div>Have an account <button onClick={() => setTrigger(trigger===false?true:false)}>Sign In</button></div>}
            </div>
            <div className='img main-right'>
                <img src={img} alt="" />
            </div>
        </div>
    );
}

export default Login;