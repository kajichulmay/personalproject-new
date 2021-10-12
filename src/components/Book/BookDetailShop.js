import { useContext, useEffect } from 'react';

import { CartContext } from '../../context/CartContext';

function BookDetailShop({ oneBook }) {
  const { handleClickAdd, amount } = useContext(CartContext);

  return (
    <div className="bookShop">
      <div className="insideBooks">
        <p className="nameBook">{oneBook?.name}</p>
        <p className="volumeBlock">เล่ม {oneBook?.volumn} </p>
        <div className="priceResult">
          <p className="priceBook">{oneBook?.price}</p>
          <p className="currency">THB</p>
        </div>
        <div className="btnCount">
          <button className="btnMinus">-</button>
          <div className="count">{amount}</div>
          <button className="btnPlus" onClick={() => handleClickAdd(oneBook.id)}>
            +
          </button>
        </div>
        <div className="buyBtnbooks">
          <a href="">
            <div className="btnCartShop">
              <i className="bi bi-cart3"></i>
              <p>เพิ่ม</p>
              <p className="numberPrice">{oneBook?.price}</p>
              <p className="currency">THB</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BookDetailShop;
