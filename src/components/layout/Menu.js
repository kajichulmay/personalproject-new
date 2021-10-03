import React from 'react';
import { NavLink } from 'react-router-dom';
function Menu() {
  const menu = [
    {
      to: '/',
      title: 'HOME',
    },
    {
      to: '/all-series',
      title: 'All Series',
    },
    {
      to: '/manga',
      title: 'Manga',
    },
    {
      to: '/light-novel',
      title: 'Light Novel',
    },
    {
      to: '/howto-buy',
      title: 'How to Buy',
    },
  ];
  return (
    <div className="menuNavbar">
      <div className="containerBlock">
        <NavLink exact to="/" className="btnMenu" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/all-series" className="btnMenu" activeClassName="active">
          All Series
        </NavLink>
        <NavLink to="/manga" className="btnMenu" activeClassName="active">
          Manga
        </NavLink>
        <NavLink to="/light-novel" className="btnMenu" activeClassName="active">
          Light Novel
        </NavLink>
        <NavLink to="/how-to-buy" className="btnMenu" activeClassName="active">
          How to buy
        </NavLink>
      </div>
    </div>
  );
}

export default Menu;
