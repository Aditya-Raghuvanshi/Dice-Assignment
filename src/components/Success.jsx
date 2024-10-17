import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setAuthenticate } from '../redux/userConfig';
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const Email=localStorage.getItem("Email");
    const auth=localStorage.getItem("authenticated");
    useEffect(()=>{
        if(auth==="false")
        {
            navigate("/");
        }
        // eslint-disable-next-line
    },[])
  return (
    <div className='success-div'>
      Congratulations <br/><h1>{Email}</h1> you are logged In 🥳🥳
        <button onClick={()=>{ 
            localStorage.setItem("authenticated",false);
            dispatch(setAuthenticate(false));
            navigate("/")
        }}>Logout</button>
    </div>
  )
}

export default Success
