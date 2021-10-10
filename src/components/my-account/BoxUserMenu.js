import React from 'react';
import { NavLink } from 'react-router-dom';
import BoxMenu from './BoxMenu';

function BoxUserMenu() {
  const menuUser = [
    {
      to: '/myaccount',
      name: 'ข้อมูลของฉัน',
    },
    {
      to: '/myaccount/address',
      name: 'ที่อยู่ของฉัน',
    },
    {
      to: '/myaccount/myorder',
      name: 'คำสั่งซื้อ',
    },
  ];
  return (
    <div className="boxUserMenu">
      <div className="accountMenu">
        <br />
        <br />
        {menuUser.map(item => (
          <BoxMenu key={item.to} tolink={item.to} name={item.name} />
        ))}
        <br />
        <br />
      </div>
    </div>
  );
}

export default BoxUserMenu;
