import axios from '../../config/axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useContext } from 'react/cjs/react.development';
import { CartContext } from '../../context/CartContext';

import SumPriceCart from './SumPriceCart';

function BoxSummary() {
  const { cartItem, setToggleUpdateCart } = useContext(CartContext);
  const history = useHistory();
  const [sumPriceAllCart, setSumPriceAllCart] = useState();

  const handleClickBuyBook = async () => {
    try {
      const createOrder = await axios.post('/order', { sumPrice: sumPriceAllCart });
      setToggleUpdateCart(cur => !cur);
      history.push('/notice-of-payment');
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <div className="shopBox">
      <div className="titleShopHead">
        <div className="textHead">
          <p>สรุปคำสั่งซื้อ</p>
        </div>
      </div>
      <SumPriceCart setSumPriceAllCart={setSumPriceAllCart} sumPriceAllCart={sumPriceAllCart} />
      <div className="boxSubmitPrice" onClick={handleClickBuyBook}>
        <button className="btnBuy">สั่งซื้อ</button>
      </div>
    </div>
  );
}

export default BoxSummary;
