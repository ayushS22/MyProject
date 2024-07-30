import React from "react"
import { testimonal } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css"

const Testimonal = () => {
  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>
          <Heading subtitle='MORE' title='Admission' />
          <h2>Process: </h2>
          <p>"Admission forms are available for download. Submit the completed form along with required documents at the school office."</p>
          <h2>Criteria: </h2>
          <p>"Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades."
</p>
<h2>Important Dates:</h2>
<p>
"Admission Form Availability: March 1st"
"Last Date for Submission: March 31st"
"Entrance Test: April 15th"
"Announcement of Results: April 30th"
</p>

          <div className='content grid2'>
            {testimonal.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonal
