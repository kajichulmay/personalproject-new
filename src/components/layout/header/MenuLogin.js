import React, { useContext, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../context/authContext';
import { CartContext } from '../../../context/CartContext';
import { removeToken } from '../../../service/localStorage';
import DropDownMenu from './DropDownMenu';

function MenuLogin() {
  const { user, setUser } = useContext(AuthContext);
  const { cartItem, setToggleUpdateCart, setCartItem } = useContext(CartContext);
  const history = useHistory();

  const handleClickLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be a log out !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!',
    }).then(result => {
      if (result.isConfirmed) {
        removeToken();
        setUser(null);
        setCartItem([]);
        setToggleUpdateCart(cur => !cur);
        Swal.fire('logout!', 'Your  has been logout.', 'success');
        history.push('/');
      }
    });
  };
  useEffect(() => {
    // console.log('Cart', cartItem);
    // console.log('User', user);
    return () => {};
  }, [cartItem]);
  return (
    <div className="menu-login">
      <div className="dropdown">
        <i className="bi bi-person-circle"></i>
        {user && <DropDownMenu />}
      </div>
      {user ? (
        <>
          <div className="menuSayHi">
            <span>Welcome,</span>
            <span>{user.username}</span>
          </div>
          <div className="menuBlock" onClick={handleClickLogout}>
            Logout
          </div>
        </>
      ) : (
        <>
          <NavLink to="/login" className="menuBlock" activeClassName="activeMenu">
            Login
          </NavLink>
          <span>OR</span>
          <NavLink to="/register" className="menuBlock" activeClassName="activeMenu">
            Register
          </NavLink>
        </>
      )}

      <div className="cartBox">
        <NavLink to="/cart" className="cartMenu">
          <i className="bi bi-cart3"></i>
          {cartItem.length > 0 && <span className="badge">{cartItem.length}</span>}
        </NavLink>
      </div>
    </div>
  );
}

export default MenuLogin;
