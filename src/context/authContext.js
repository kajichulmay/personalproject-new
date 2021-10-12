import axios from '../config/axios';
import { createContext, useState, useEffect } from 'react';
import { user as initialUser } from '../service/localStorage';
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  const [myAccountUser, setMyAccountUser] = useState([]);

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
        myAccountUser,
        setMyAccountUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
