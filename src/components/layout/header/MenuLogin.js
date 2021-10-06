import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../../context/authContext';
import { removeToken } from '../../../service/localStorage';
import DropDownMenu from './DropDownMenu';

function MenuLogin() {
  const { user, setUser } = useContext(AuthContext);
  const history = useHistory();
  const handleClickLogout = () => {
    removeToken();
    setUser(null);
    history.push('/');
  };
  return (
    <div className="menu-login">
      <div className="dropdown">
        <i className="bi bi-person-circle"></i>
        {user && <DropDownMenu />}
      </div>
      {user ? (
        <div className="menuBlock" activeClassName="activeMenu" onClick={handleClickLogout}>
          Logout
        </div>
      ) : (
        <NavLink to="/login" className="menuBlock" activeClassName="activeMenu">
          Login
        </NavLink>
      )}
      <span>OR</span>
      <NavLink to="/register" className="menuBlock" activeClassName="activeMenu">
        Register
      </NavLink>
      <div className="cartBox">
        <NavLink to="/cart" className="cartMenu">
          <i className="bi bi-cart3"></i>
          <span className="badge">3</span>
        </NavLink>
      </div>
    </div>
  );
}

export default MenuLogin;
