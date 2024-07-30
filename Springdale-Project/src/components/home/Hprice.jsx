import React from "react"
import Heading from "../common/heading/Heading"
import PriceCard from "../pricing/PriceCard"

const Hprice = () => {
  return (
    <>
      <section className='hprice padding'>
        <Heading subtitle='MORE' title='Students' />
        <div className="me">
          <h2>Life at Springdale:</h2>
          <p>Extracurricular Activities: "Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club"</p>
          <p>Clubs and Societies: "Literary Society, Environmental Club, Astronomy Club, Coding Club"</p>
          <h2>Achievements:
</h2>
<p>"John Smith - National Level Math Olympiad Winner"
</p>
<p>"Sarah Lee - Gold Medalist in State Swimming Championship"
</p>
<p>"Tech Innovators Club - Winners of Inter-School Robotics Competition"
</p>
        <h2>Student Council:
</h2>
<p>President: Amy Parker, Grade 12

</p>
<p>
Vice President: Rajiv Mehta, Grade 11
</p>
<p>Secretary: Lisa Wong, Grade 10</p>
</div>
        <div className='price container grid'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Hprice
