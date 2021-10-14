import axios from '../../config/axios';
import React, { useState } from 'react';
import SumPriceBox from './SumPriceBox';
import { useContext } from 'react/cjs/react.development';
import { CartContext } from '../../context/CartContext';

function ShopList({ oldSumPrice, nameBook, volumn, imageBook, price, oldSumAmount, id, bookStock }) {
  const [sumAmount, setSumAmount] = useState(oldSumAmount);
  const [sumPrice, setSumPrice] = useState(oldSumPrice);
  const { cartItem, setCartItem, setToggleUpdateCart } = useContext(CartContext);
  const handleClickUpdateBookAdd = async () => {
    try {
      if (bookStock > sumAmount) {
        setSumAmount(cur => cur + 1);

        const updateBookStock = await axios.put(`/addCart/${id}`, {
          sumPrice: (sumPrice / sumAmount) * (sumAmount + 1),
          sumAmount: sumAmount + 1,
        });
        setToggleUpdateCart(cur => !cur);
      }
    } catch (err) {
      console.dir(err);
    }
  };

  const handleClickUpdateBookDel = async () => {
    try {
      if (sumAmount > 1) {
        setSumAmount(cur => cur - 1);

        const updateBookStock = await axios.put(`/addCart/${id}`, {
          sumPrice: (sumPrice / sumAmount) * (sumAmount - 1),
          sumAmount: sumAmount - 1,
        });
        setToggleUpdateCart(cur => !cur);
      }
    } catch (err) {
      console.dir(err);
    }
  };

  const handleClickDelCart = async () => {
    try {
      const idx = cartItem.findIndex(item => item.id === id);
      const newCartItem = [...cartItem];
      newCartItem.splice(idx, 1);
      setCartItem(newCartItem);
      await axios.delete(`/addCart/${id}`);
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <div className="shopList">
      <div className="imgShop">
        <img src={imageBook} />
      </div>
      <div className="nameBookShop">
        <p>{nameBook}</p>
        <p>เล่ม {volumn}</p>
      </div>
      <div className="priceBookShop">
        <p>{price} THB</p>
      </div>
      <div className="btnCountBook">
        <button className="btnMinus" onClick={handleClickUpdateBookDel}>
          -
        </button>
        <div className="count">{sumAmount}</div>
        <button className="btnPlus" onClick={handleClickUpdateBookAdd}>
          +
        </button>
      </div>

      <SumPriceBox sumPrice={sumPrice} price={price} setSumPrice={setSumPrice} sumAmount={sumAmount} />
      <div className="btnDelBook" onClick={handleClickDelCart}>
        <i className="bi bi-x-square"></i>
      </div>
    </div>
  );
}

export default ShopList;
