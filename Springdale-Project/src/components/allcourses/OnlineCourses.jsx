import React from "react"
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"

const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='MORE' title='Academics' />
          <h2>Curriculum:</h2>
          <p>Primary (Grades 1-5): English, Mathematics, Science, Social Studies, Art, Physical Education
Secondary (Grades 6-10): English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art
Senior Secondary (Grades 11-12):
Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English
Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English
</p>
<h2>Teaching Methodologies: </h2>
<p>"We use a blend of traditional and modern teaching techniques to cater to different learning styles."
</p>
<h2>Educational Resources: </h2>
<p>"Digital classrooms, interactive learning modules, and access to online educational platforms."</p>
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses
