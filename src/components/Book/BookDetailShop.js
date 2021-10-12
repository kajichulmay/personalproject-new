import { useEffect } from 'react';

function BookDetailShop({ oneBook, amount, setAmount, newPrice, handleClickMinusBook, handleClickPlusBook }) {
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
          <button className="btnMinus" onClick={handleClickMinusBook}>
            -
          </button>
          <div className="count">{amount}</div>
          <button className="btnPlus" onClick={handleClickPlusBook}>
            +
          </button>
        </div>
        <div className="buyBtnbooks">
          <a href="">
            <div className="btnCartShop">
              <i className="bi bi-cart3"></i>
              <p>เพิ่ม</p>
              <p className="numberPrice">{newPrice}</p>
              <p className="currency">THB</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BookDetailShop;
