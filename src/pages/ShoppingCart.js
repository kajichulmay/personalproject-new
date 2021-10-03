import React from 'react';
import BoxSummary from '../components/ShopCart/BoxSummary';
import ShopContainer from '../components/ShopCart/ShopContainer';

function ShoppingCart() {
  return (
    <div className="ShoppingCart">
      <div className="containerShopCart">
        <ShopContainer />
        <BoxSummary />
      </div>
    </div>
  );
}

export default ShoppingCart;
