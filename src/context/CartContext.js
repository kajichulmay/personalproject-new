import axios from '../config/axios';
import { createContext, useState, useEffect } from 'react';
import { useContext } from 'react/cjs/react.development';
import { AuthContext } from './authContext';
import { getToken } from '../service/localStorage';
import { useParams } from 'react-router';

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [bookTransaction, setBookTransaction] = useState([]);
  const [toggleUpdateBook, setToggleUpdateBook] = useState(true);
  const [cartItem, setCartItem] = useState([]);
  const [toggleUpdateCart, setToggleUpdateCart] = useState(false);
  const { user } = useContext(AuthContext);
  // const params = useParams();
  useEffect(() => {
    const fetchAllBook = async () => {
      try {
        const bookAll = await axios.get('/');

        setBookTransaction(bookAll.data.bookAll);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchAllBook();
  }, [toggleUpdateBook]);

  useEffect(() => {
    const fetchProductCart = async () => {
      // console.log(cartItem);
      // getToken
      if (user) {
        try {
          const allCart = await axios.get('/addCart');
          setCartItem(allCart.data.getAll);
        } catch (err) {
          console.dir(err);
        }
      }
    };
    // console.log('testlog');
    fetchProductCart();
  }, [toggleUpdateCart]);

  // console.log(cartItem);
  return (
    <CartContext.Provider
      value={{
        bookTransaction,
        setBookTransaction,
        setToggleUpdateBook,
        toggleUpdateBook,
        cartItem,
        setCartItem,
        setToggleUpdateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
