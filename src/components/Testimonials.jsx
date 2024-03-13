import React from "react";

const Testimonials = () => {
  return (
    <div id="testimonial">
      <h2>Testimonials</h2>

      <section>
        <TestimonialsCard
          img={"https://www.rocketblocks.me/images/testimonials/nupur.jpeg"}
          name={"Nupur Jain"}
          feedback={
            "I used to have nightmares about broken layouts and unresponsive designs. Thanks to Shubham Solanki, my dreams are now filled with beautifully crafted websites."}
        />
        <TestimonialsCard
          img={"https://www.rocketblocks.me/images/homepage/jana-haas.jpeg"}
          name={"Kaitlyn Gelpi"}
          feedback={"If front-end development were an art, Shubham Solanki would be the Picasso of pixels. Our project was a canvas, and they painted it with strokes of CSS genius. Truly, a master of the craft!"}
        />
        <TestimonialsCard
          img={"https://www.rocketblocks.me/images/testimonials/kamilla.jpeg"}
          name={"Kamilla Yunos"}
          feedback={ "Working with Shubham Solanki was like having a coding wizard at our fingertips! Our website went from 'meh' to 'WOW' in no time. The attention piexel perfect"}
        />
      </section>
    </div>
  );
};

const TestimonialsCard = ({ name, feedback, img }) => (
  <article>
    <img src={img} />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonials;
