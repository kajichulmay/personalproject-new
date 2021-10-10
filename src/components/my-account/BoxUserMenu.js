import React from 'react';
import { NavLink } from 'react-router-dom';
import BoxMenu from './BoxMenu';

function BoxUserMenu() {
  return (
    <div className="boxUserMenu">
      <div className="accountMenu">
        <br />
        <br />
        {/* <BoxMenu /> */}
        <NavLink to="/myaccount" className="box-menu">
          <i className="fas fa-user-circle"></i>
          <p>ข้อมูลของฉัน</p>
        </NavLink>

        <NavLink to="/myaccount/address" className="box-menu">
          <i className="fas fa-home"></i>
          <p>ที่อยู่ของฉัน</p>
        </NavLink>
        <NavLink to="/myaccount/myorder" className="box-menu">
          <i className="fas fa-archive"></i>
          <p>คำสั่งซื้อ</p>
        </NavLink>
        <br />
        <br />
      </div>
    </div>
  );
}

export default BoxUserMenu;
