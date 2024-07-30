import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
           
            <li>
              <Link to='/'>Home Page</Link>
            </li>
            <li>
              <Link to='/courses'>About Us</Link>
            </li>
            <li>
              <Link to='/about'>Academics</Link>
            </li>
            <li>
              <Link to='/team'>Admission</Link>
            </li>
            <li>
              <Link to='/pricing'>Faculty</Link>
            </li>
            <li>
              <Link to='/journal'>Students</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
