import React from "react"
import OnlineCourses from "../allcourses/OnlineCourses"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"
import { coursesCard } from "../../dummydata"

const HAbout = () => {
  return (
    <>
      <section className='homeAbout'>
        <div className='container'>
          <Heading subtitle='More Information' title='About Us' />
          <div>
            <ul>
              <li>1) History: "Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</li>
              <li>2) Vision: "To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
</li>
              <li>3) Mission: "To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</li>
              <li>4) Principal's Message: "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</li>
              <li>5) Infrastructure and Facilities:
              <h5>
              "State-of-the-art science and computer labs"

              </h5>
              <h5>"Spacious and well-equipped classrooms</h5>
              <h5>"Library with a vast collection of books and digital resources"</h5>
              <h5>"Sports facilities including a playground, gymnasium, and swimming pool"
</h5>
<h1>Popular Online Courses</h1>

</li>
            </ul>
          </div>

          <div className='coursesCard'>
            {/* copy code form  coursesCard */}
            <div className='grid2'>
              {coursesCard.slice(0, 3).map((val) => (
                <div className='items'>
                  <div className='content flex'>
                    <div className='left'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                    </div>
                    <div className='text'>
                      <h1>{val.coursesName}</h1>
                      <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <label htmlFor=''>(5.0)</label>
                      </div>
                      <div className='details'>
                        {val.courTeacher.map((details) => (
                          <>
                            <div className='box'>
                              <div className='dimg'>
                                <img src={details.dcover} alt='' />
                              </div>
                              <div className='para'>
                                <h4>{details.name}</h4>
                              </div>
                            </div>
                            <span>{details.totalTime}</span>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='price'>
                    <h3>
                      {val.priceAll} / {val.pricePer}
                    </h3>
                  </div>
                  <button className='outline-btn'>ENROLL NOW !</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <OnlineCourses />
      </section>
    </>
  )
}

export default HAbout
