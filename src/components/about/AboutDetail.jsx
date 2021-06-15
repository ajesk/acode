import React from 'react';

const AboutDetail = ({ detail }) =>
  <>
    <h2>
      {detail.title}
    </h2>
    <p>
      {detail.desc}
    </p>
    {detail.images.map((img) => <img src={img} alt={detail.title} />)}
  </>

export default AboutDetail