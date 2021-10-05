import axios from 'axios';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { setToken } from '../../service/localStorage';
import TextTitle from './TextTitle';
import jwtDecode from 'jwt-decode';
import { useHistory } from 'react-router';
function FormLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    errorUsername: '',
    errorPassword: '',
  });
  const { setUser } = useContext(AuthContext);
  const history = useHistory();
  const handleSubmitLogin = async e => {
    try {
      e.preventDefault();
      if (username.trim() === '') {
        setError(cur => ({ ...cur, errorUsername: 'username is require' }));
      } else {
        setError(cur => ({ ...cur, errorUsername: '' }));
      }
      if (password.trim() === '') {
        setError(cur => ({ ...cur, errorPassword: 'password is require' }));
      } else {
        setError(cur => ({ ...cur, errorPassword: '' }));
      }

      const res = await axios.post('http://localhost:9999/login', { username, password });
      setToken(res.data.token);
      setUser(jwtDecode(res.data.token));
      history.push('/');
    } catch (err) {
      setError(cur => ({
        ...cur,
        errorPassword: 'username or password is invaild',
        errorUsername: 'username or password is invaild',
      }));
    }
  };
  return (
    <div className="FormLogin">
      <TextTitle />
      <form className="formLog" onSubmit={handleSubmitLogin}>
        <input
          type="text"
          className={`inputUsername ${error ? 'is-invalid' : ''}`}
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        {error.errorUsername ? <div className="invalid-feedback">{error.errorUsername}</div> : ''}
        <input
          type="password"
          className={`inputPass ${error ? 'is-invalid' : ''}`}
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error.errorPassword ? <div className="invalid-feedback">{error.errorPassword}</div> : ''}
        <button type="submit" className="btnLogin">
          Login
        </button>
      </form>
    </div>
  );
}

export default FormLogin;
