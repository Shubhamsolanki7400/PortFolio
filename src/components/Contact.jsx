import React, { useState } from 'react'
import vector from "../../../port-folio/src/assets/vector.png"
import { toast } from 'react-hot-toast'
import {motion} from "framer-motion"
import {addDoc,collection} from "firebase/firestore";
import { db } from '../FireBase';
const Contact = () => {
const[name,setName]=useState("")
const[email,setEmail]=useState("")
const[message,setMessage]=useState("")
const[disableBtn,setdisableBtn]=useState(false)
  const sumbitHandler=async(e)=>{
    e.preventDefault()
    setdisableBtn(true)
  console.log(name,email,message);
  
try {
  await addDoc(collection(db,"contacts"),{
    name,
    email,
    message
  });
  setEmail("")
  setName("")
  setMessage("")
  toast.success("Message Send")
  setdisableBtn(false)
} catch (error) {
  toast.error("Error")
  console.log(error)
setdisableBtn(false)
}
 
  }

  const animations = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <div id='contact'>
        <section>
            <motion.form disable={disableBtn} onSubmit={sumbitHandler} {...animations.form} >
          <h2>Contact me</h2>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Your Name' required/>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Your Email' required/>
          <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Your Message' required/>
          <motion.button type='submit' {...animations.button} className={disableBtn?"disableBtn":""}>Send</motion.button>
            </motion.form>
        </section>
        <aside>
            <img src={vector} alt="" />
        </aside>
    </div>
  )
}

export default Contact