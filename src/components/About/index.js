import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg"

function About() {

  return (

<section className="my-5">
  <h1 id="about">day 2 of cheating for the green square, i should be ashamed of myself</h1>
  <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
</section>

  );
}

export default About;