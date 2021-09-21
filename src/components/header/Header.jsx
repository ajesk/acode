import React from 'react';
import './Header.scss';

const Header = ({ setPage, pages }) => {
  return (
    <div className="header">
      <button className="header-name" onClick={() => setPage(0)}>Aaron Jeskie</button>
      <div className="vr" />
      {
        pages.filter(page => page.name !== '')
          .map((page, i) =>
            <button key={i} className="page-tab" onClick={() => setPage(page.id)}>
              {page.name}
            </button>)
      }
      <a href="https://www.acode.io" target="_blank" rel="noreferrer noopener">
        <button key={999} className="page-tab">
          Blog
        </button>
      </a>
    </div>
  );
}

export default Header;
