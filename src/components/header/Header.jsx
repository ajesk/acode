import React from 'react';
import './Header.scss';

const Header = ({ setPage, pages }) => {
  return (
    <div className="header">
      <div className="header-name" onClick={() => setPage(0)}>acode.io</div>
      {pages.map((page, i) => <div key={i} className="page-tab" onClick={() => setPage(i)}>{page.name}</div>)}
    </div>
  );
}

export default Header;
