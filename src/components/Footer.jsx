import React from 'react'
import Profile from "../assets/logo.png"
import { AiFillFacebook, AiFillGithub, AiFillInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
        <div>
            <img src={Profile} alt="founder"/>
            <h2>Shubham Solanki</h2>
            <p>Self Believe and Hardwork will always earn you success...</p>
        </div>

        <aside>
            <h2>Social Media</h2>
            <article>
            <a href="#home" target={'blank'}>
            <AiFillInstagram/>
            </a>
            <a href="#home" target={'blank'}>
            <AiFillGithub/>
            </a>
            <a href="#home" target={'blank'}>
            <AiFillFacebook/>
            </a>
            </article>
            
        </aside>
    </footer>
  )
}

export default Footer