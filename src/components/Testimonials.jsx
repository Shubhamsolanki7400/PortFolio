import React from 'react'

const Testimonials = () => {
  return (
    <div id='testimonial'>
        <h2>Testimonials</h2>

        <section>
            <TestimonialsCard name={"Shubh"} feedback={"Your Ui Part is So Good"}/>
            <TestimonialsCard name={"Shubh"} feedback={"Your Ui Part is So Good"}/>
            <TestimonialsCard name={"Shubh"} feedback={"Your Ui Part is So Good"}/>

        </section>
    </div>
  )
}

const TestimonialsCard=({name,feedback})=>(
    <article>
        <img src="https://www.shareicon.net/data/128x128/2016/07/26/801997_user_512x512.png" alt="" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testimonials