import React from "react"
import "../blog/blog.css"
import { blog } from "../../dummydata"
import Heading from "../common/heading/Heading"

// copy code of blog => blogCard

const Hblog = () => {
  return (
    <>
      <section className='blog'>
        <div className='container'>
          <Heading subtitle='MORE' title='Faculty' />
          <div>
            <h2>Profiles:<p>
John Doe: Principal, M.Ed, 20 years of experience in educational administration.
<p>Jane Smith: Vice Principal, M.Sc. in Physics, 15 years of teaching experience.</p>
<p>Emily Johnson: English Teacher, M.A. in English, 10 years of teaching experience.</p>
<p>Michael Brown: Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience.</p>
<p>Sophia Davis: Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.</p>
<p>David Wilson: Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience.</p>
</p>
</h2>
          </div>
          <div className='grid2'>
            {blog.slice(0, 3).map((val) => (
              <div className='items shadow'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <div className='admin flexSB'>
                    <span>
                      <i className='fa fa-user'></i>
                      <label htmlFor=''>{val.type}</label>
                    </span>
                    <span>
                      <i className='fa fa-calendar-alt'></i>
                      <label htmlFor=''>{val.date}</label>
                    </span>
                    <span>
                      <i className='fa fa-comments'></i>
                      <label htmlFor=''>{val.com}</label>
                    </span>
                  </div>
                  <h1>{val.title}</h1>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hblog
