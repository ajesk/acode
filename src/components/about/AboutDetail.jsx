import React from 'react';

const AboutDetail = ({ detail }) =>
  <>
    <h2>
      {detail.title}
    </h2>
    <p>
      {detail.desc}
    </p>
    {detail.img && <img src={detail.img} alt={detail.title} />}
  </>

export default AboutDetail