import React from 'react';
import SearchBox from './SearchBox';
import Brand from './Brand';
import MenuLogin from './MenuLogin';
function Header() {
  return (
    <div className="header">
      <div className="containerBlock">
        <SearchBox />
        <Brand />
        <MenuLogin />
      </div>
    </div>
  );
}

export default Header;
