import React from 'react';
import { NavLink } from 'react-router-dom';
import BoxMenu from './BoxMenu';

function BoxUserMenu() {
  const menuUser = [
    {
      to: '/myaccount',
      name: 'ข้อมูลของฉัน',
      classIcon: 'fas fa-user-circle',
    },
    {
      to: '/myaccount/address',
      name: 'ที่อยู่ของฉัน',
      classIcon: 'far fa-address-card',
    },
    {
      to: '/myaccount/myorder',
      name: 'คำสั่งซื้อ',
      classIcon: 'fas fa-archive',
    },
  ];
  return (
    <div className="boxUserMenu">
      <div className="accountMenu">
        <br />
        <br />
        {menuUser.map(item => (
          <BoxMenu key={item.to} tolink={item.to} name={item.name} classIcon={item.classIcon} />
        ))}
        <br />
        <br />
      </div>
    </div>
  );
}

export default BoxUserMenu;
