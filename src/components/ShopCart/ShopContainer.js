import React from 'react';
import ShopList from './ShopList';

function ShopContainer() {
  return (
    <div className="shopBox">
      <div className="titleShopHead">
        <div className="textHead">
          <p>ตระกร้าสินค้า</p>
          <i className="bi bi-x-square"></i>
        </div>
      </div>
      <ShopList />
      <ShopList />
    </div>
  );
}

export default ShopContainer;
