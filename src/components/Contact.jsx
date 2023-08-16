import React, { useState } from 'react'
import vector from "../../../port-folio/src/assets/vector.png"
import { toast } from 'react-hot-toast'
const Contact = () => {
const[name,setName]=useState("")
const[email,setEmail]=useState("")
const[message,setMessage]=useState("")
  const sumbitHandler=(e)=>{
    e.preventDefault()
  console.log(name,email,message)
  toast.success("Message Send")
  }
  return (
    <div id='contact'>
        <section>
            <form onSubmit={sumbitHandler}>
          <h2>Contact me</h2>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Your Name' required/>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Your Email' required/>
          <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Your Message' required/>
          <button type='submit'>Send</button>
            </form>
        </section>
        <aside>
            <img src={vector} alt="" />
        </aside>
    </div>
  )
}

export default Contact