import React from 'react';
import { NavLink } from 'react-router-dom';
import imgBookMock from '../../image/cover/onepice.png';
import iconCart from '../../image/icon/cart_2.png';
function BookList({ imageUrl, name, volumn, price }) {
  return (
    <div className="bookContainer">
      <div className="imgBook">
        <NavLink to="/book">
          <img className="imgCover" src={imageUrl} />
        </NavLink>
      </div>
      <div className="text_inside">
        <p className="nameBooks">
          <NavLink to="/book">{name} </NavLink>
        </p>
        <p className="volumeBlock">เล่ม {volumn} </p>
        <div className="discount">
          <p className="priceBook">{price}</p>
          <p className="currency">THB</p>
          <img className="btnCartBook" src={iconCart} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BookList;
