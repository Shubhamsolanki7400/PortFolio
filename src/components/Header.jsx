import React from 'react'

const Header = () => {
  return (
   <>
   <nav>
   <NavContent/>
   </nav>
   
   </>
  )
}


const NavContent=()=>(
    <>
    <h2>Shubh.</h2>
    <div>
        <a href='#home'>Home</a>
        <a href='#work'>Work</a>
        <a href='#experience'>Exprience</a>
        <a href='#services'>Services</a>
        <a href='#testimonial'>Testimonial</a>
        <a href='#contact'>Contact</a>
    </div>

    <a href='mailto:shubhamsolanki740080@gmail.com'>
    <button>Email</button>
    </a>
    
    
    </>
)

export default Header