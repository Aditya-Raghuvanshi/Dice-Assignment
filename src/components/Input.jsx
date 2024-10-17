import React, { useState } from 'react'

const Input = ({val,place}) => {
    const [data,setData]=useState("");
    val(data);
  return (
    <div>
      <input type="email" value={data} onChange={(e)=>setData(e.target.value)} placeholder={`Enter your ${place}`}/>
    </div>
  )
}

export default Input
