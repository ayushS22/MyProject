import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='Welcome to Springdale Public School' title='We Nature Young Minds For a Brighter Future' />
            <p>Our dedicated staff is committed to providing a supportive and enriching environment for every student</p>
            <div className='button'>
              <button className='primary-btn'>
                ADMISSIONS OPEN NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW DETAILS<i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
