import axios from '../config/axios';
import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [bookTransaction, setBookTransaction] = useState([]);
  const [toggleUpdateBook, setToggleUpdateBook] = useState(true);
  const [cartItem, setCartItem] = useState([]);
  const [amount, setAmount] = useState(1);
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

  // console.log(bookTransaction);
  const handleClickAdd = bookId => {
    const idx = cartItem.findIndex(item => item?.id === bookId);
    const idxNewbook = bookTransaction.findIndex(item => item.id === bookId);
    if (bookTransaction[idxNewbook].amount > amount) {
      setAmount(cur => cur + 1);
    }
  };

  return (
    <CartContext.Provider
      value={{ bookTransaction, setBookTransaction, setToggleUpdateBook, toggleUpdateBook, handleClickAdd, amount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
