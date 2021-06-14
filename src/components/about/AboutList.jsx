import React from 'react';

const AboutList = ({ aboutItems = [], selected = 0, handleSelect = (x) => x }) =>
  <ul>
    {
      aboutItems.map(item =>
        <li key={item.key} className={item.key===selected && "selected"} onClick={() => handleSelect(item.key)}>
          {item.title}
        </li>
      )
    }
  </ul>;

export default AboutList;