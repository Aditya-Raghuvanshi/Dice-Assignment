import { createSlice } from "@reduxjs/toolkit";

const userConfig=createSlice({
    name:"user",
    initialState:{
        token:'',
        authenticated:false,
        user:{
            email:"",
            password:"",
        },
    },
    reducers:{
        onLogin:(state,action)=>{
            localStorage.setItem("Email",action.payload.email);
            localStorage.setItem("token",action.payload.data);
            state.token=action.payload.data;
            localStorage.setItem("authenticated", true);
            state.authenticated=true;
        },
        updateEmail:(state,action)=>{
            state.user.email=action.payload;
        }, 
        setAuthenticate:(state,action)=>{
            state.authenticated=action.payload;
        }
    }
})

export const {onLogin,setAuthenticate,updateEmail}=userConfig.actions

export default userConfig.reducer