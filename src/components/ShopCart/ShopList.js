import React from 'react';
import imgMockBook from '../../image/cover/onepice.png';
function ShopList() {
  return (
    <div className="shopList">
      <div className="imgShop">
        <img src={imgMockBook} />
      </div>
      <div className="nameBook">
        <p>ดาบพิฆาตอสูร</p>
        <p>เล่ม</p>
      </div>
      <div className="priceBookShop">
        <p>85 THB</p>
      </div>
      <div className="btnCountBook">
        <button className="btnMinus">-</button>
        <div className="count">1</div>
        <button className="btnPlus">+</button>
      </div>
      <div className="sumPriceBook">
        <p>85 THB</p>
      </div>
      <div className="btnDelBook">
        <i class="bi bi-x-square"></i>
      </div>
    </div>
  );
}

export default ShopList;
