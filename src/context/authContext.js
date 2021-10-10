import axios from '../config/axios';
import { createContext, useState, useEffect } from 'react';
import { user as initialUser } from '../service/localStorage';
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);
  const [bookTransaction, setBookTransaction] = useState([]);
  const [myAccountUser, setMyAccountUser] = useState({});

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
  }, []);

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
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, bookTransaction, myAccountUser, setMyAccountUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
