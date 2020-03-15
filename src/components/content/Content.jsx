import React from 'react';
import './Content.scss';

const Content = ({ page }) => {
  return (
    <div className="content">
      <h1>
      {page.name}
      </h1>
      <div>
      {page.component}
      </div>
    </div>
  );
}

export default Content;
