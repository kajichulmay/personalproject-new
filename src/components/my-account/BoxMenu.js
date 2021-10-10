import React from 'react';
import { NavLink } from 'react-router-dom';
function BoxMenu({ name, tolink }) {
  return (
    <NavLink to={tolink} className="box-menu">
      <i className="fas fa-user-circle"></i>
      <p>{name}</p>
    </NavLink>
  );
}

export default BoxMenu;
