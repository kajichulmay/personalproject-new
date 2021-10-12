import React from 'react';
import { NavLink } from 'react-router-dom';
function BoxMenu({ name, tolink, classIcon }) {
  return (
    <NavLink to={tolink} className="box-menu">
      <i className={classIcon}></i>
      <p>{name}</p>
    </NavLink>
  );
}

export default BoxMenu;
