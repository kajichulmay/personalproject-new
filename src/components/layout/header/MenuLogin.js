import React from 'react';
import { NavLink } from 'react-router-dom';
import DropDownMenu from './DropDownMenu';

function MenuLogin() {
  return (
    <div className="menu-login">
      <div className="dropdown">
        <i className="bi bi-person-circle"></i>
        <DropDownMenu />
      </div>
      <NavLink to="/login" className="menuBlock" activeClassName="activeMenu">
        Login
      </NavLink>
      {/* <NavLink to="/login" className="menuBlock" activeClassName="activeMenu">
        Logout
      </NavLink> */}
      <span>OR</span>
      <NavLink to="/register" className="menuBlock" activeClassName="activeMenu">
        Register
      </NavLink>
      <div className="cartBox">
        <NavLink to="/cart" className="cartMenu">
          <i className="bi bi-cart3"></i>
          <span class="badge">3</span>
        </NavLink>
      </div>
    </div>
  );
}

export default MenuLogin;
