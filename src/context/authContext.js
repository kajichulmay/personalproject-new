import axios from '../config/axios';
import { createContext, useState, useEffect } from 'react';
import { user as initialUser } from '../service/localStorage';
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);
  const [bookTransaction, setBookTransaction] = useState([]);
  const [myAccountUser, setMyAccountUser] = useState([]);
  const [toggleUpdateBook, setToggleUpdateBook] = useState(true);

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
    const fetchInfoAccount = async () => {
      try {
        const res = await axios.get('/myaccount');

        setMyAccountUser(res.data.account);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchInfoAccount();
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        bookTransaction,
        setBookTransaction,
        myAccountUser,
        setMyAccountUser,
        setToggleUpdateBook,
        toggleUpdateBook,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
