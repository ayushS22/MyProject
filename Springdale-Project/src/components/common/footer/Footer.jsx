import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>Contact Us</h1>
            <h2>
</h2>


          </div>
          <div>
            <p className="xy"> </p>
          </div>
         
          <div className='box link'>
            
            
          </div>
          <div className='box link'>
            
            
          </div>
          <div className='box'>

            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Address: "Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code"

              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                Phone: "+1 (123) 456-7890"

              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                Email: "info@springdale.edu"
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1>Additional Notes
</h1>
<p>Use placeholder images and videos where necessary. You can find free placeholders on websites like placeholder.com or unsplash.com.
</p>
<p>For the Google Maps integration, you can use an iframe with a dummy address.
</p>
<p>Ensure all dummy data is used consistently across the website to maintain coherence.</p>
<p>Feel free to modify or expand this data as needed to fit your design and development process.
</p>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2025 All rights reserved | This template is made with <i className='fa fa-heart'></i> by Ayush Sahu,30/7/2025
        </p>
      </div>
    </>
  )
}

export default Footer
