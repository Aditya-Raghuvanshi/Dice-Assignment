import { supabase } from '../utils/createClient';
import { useDispatch } from 'react-redux';
import { onLogin, updateEmail } from '../redux/userConfig';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const useLoginHook = async({trigger,name,email,password,setName,setEmail,setPassword}) => {
        const navigate=useNavigate();
        const dispatch=useDispatch();
        
        useEffect(()=>{
            handle();
            // eslint-disable-next-line
        },[trigger,name,email,password,setName,setEmail,setPassword])   
        const handle=async()=>{
            if(trigger===true)
                {
                    if (name === '') {
                        alert("Enter your name");
                        return;
                    }   
                    if (email === '') {
                        alert("Enter your email");
                        return;
                    }
                    if (password === '') {
                        alert("Enter your password");
                        return;
                    }
                    
                    const { data, error } = await supabase.auth.signInWithPassword({
                                email: email,
                                password: password,
                                })
                    console.log(data,error);
                    if(data===null)
                    {
                        alert("wrong email id password",error);
                    }
                    else{
                        // dispatch(onLogin( email ));
                        dispatch(onLogin({email,data:data.session.access_token}));
                        navigate("/success");
                    }
                    
                    dispatch(updateEmail(email));
                    // console.log(email);
                    
                    setEmail("");
                    setName("");
                    setPassword("");  
                }
        }       
}

export default useLoginHook
