import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../../context/authContext';
import axios from '../../config/axios';
import iconCart from '../../image/icon/cart_2.png';
import { CartContext } from '../../context/CartContext';
function BookList({ imageUrl, name, volumn, price, bookId }) {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const { setToggleUpdateCart } = useContext(CartContext);
  const handleClickBuyOneBook = async () => {
    try {
      if (!user) {
        history.push('/login');
      } else {
        const createCart = await axios.post('/addCart', {
          sumPrice: price,
          sumAmount: 1,
          bookId,
          userId: user.id,
          isConfirm: false,
        });
        setToggleUpdateCart(cur => !cur);
      }
    } catch (err) {
      console.dir(err);
    }
  };
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
          <img className="btnCartBook" src={iconCart} onClick={handleClickBuyOneBook} />
        </div>
      </div>
    </div>
  );
}

export default BookList;
