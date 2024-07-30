import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/about.webp' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='LEARN ANYTHING' title='Home Page' />
            <div>
            
            <h4>School Name: Springdale Public School</h4>
            <img src="file:///C:/Users/ayush/Downloads/springdale_public_school.jpeg" alt="This is the logo of school"></img>
            <h4>Introduction: "Welcome to Springdale Public School, where we nurture young minds for a brighter future."</h4>
            <h4>Carousel/Banner Highlights:
</h4>
                         <ul >
        <li>Annual Sports Day - Celebrating Excellence in Sports
</li>
        <li>Science Exhibition - Showcasing Student Innovations</li>
        <li>Cultural Fest - Embracing Diversity and Creativity
</li>
    </ul>

            </div>
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default AboutCard
