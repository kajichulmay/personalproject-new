import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import iconCart from '../../image/icon/cart_2.png';
function BookList({ imageUrl, name, volumn, price, bookId }) {
  const history = useHistory();
  return (
    <div className="bookContainer">
      <div className="imgBook">
        <img className="imgCover" src={imageUrl} onClick={() => history.push(`/book/${bookId}`)} />
      </div>
      <div className="text_inside">
        <p className="nameBooks" onClick={() => history.push(`/book/${bookId}`)}>
          {name}
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
