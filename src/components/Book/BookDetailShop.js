import React from 'react';

function BookDetailShop() {
  return (
    <div className="bookShop">
      <div className="insideBooks">
        <p className="nameBook">ดาบพิฆาตอสูร</p>
        <p className="volumeBlock">เล่ม 23 </p>
        <div className="priceResult">
          <p className="priceBook">85</p>
          <p className="currency">THB</p>
        </div>
        <div className="btnCount">
          <button className="btnMinus">-</button>
          <div className="count">1</div>
          <button className="btnPlus">+</button>
        </div>
        <div className="buyBtnbooks">
          <a href="">
            <div class="btnCartShop">
              <i className="bi bi-cart3"></i>
              <p>เพิ่ม</p>
              <p className="numberPrice">85</p>
              <p className="currency">THB</p>
              <p className="price">95 THB</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BookDetailShop;
