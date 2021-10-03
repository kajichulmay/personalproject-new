import React from 'react';
import { NavLink } from 'react-router-dom';

function Brand() {
  return (
    <div className="boxBrand">
      <NavLink to="/" className="Brandtext">
        PIKABOOKS
      </NavLink>
    </div>
  );
}

export default Brand;
