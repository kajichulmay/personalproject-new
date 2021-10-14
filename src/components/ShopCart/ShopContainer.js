import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { CartContext } from '../../context/CartContext';
import ShoppingCart from '../../pages/ShoppingCart';
import ShopList from './ShopList';

function ShopContainer() {
  const { cartItem } = useContext(CartContext);

  return (
    <div className="shopBox">
      <div className="titleShopHead">
        <div className="textHead">
          <p>ตระกร้าสินค้า</p>
        </div>
      </div>
      {cartItem.map(item => (
        <ShopList
          key={item.id}
          id={item.id}
          oldSumPrice={item.sumPrice}
          oldSumAmount={item.sumAmount}
          price={item.Book.price}
          nameBook={item.Book.name}
          imageBook={item.Book.imageUrl}
          volumn={item.Book.volumn}
          bookStock={item.Book.amount}
        />
      ))}
    </div>
  );
}

export default ShopContainer;
