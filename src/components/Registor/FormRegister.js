import React, { useState } from 'react';
import TextTitle from '../Login/TextTitle';
import axios from 'axios';
import { useHistory } from 'react-router';
function FormRegister() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState({
    errUsername: '',
    errPassword: '',
    errConfirmPassword: '',
    errEmail: '',
    errFirstName: '',
    errLastName: '',
  });
  const history = useHistory();
  const handleSumbitRegister = async e => {
    try {
      e.preventDefault();
      if (firstName.trim() === '') setError(current => ({ ...current, errFirstName: 'first name is require' }));
      if (lastName.trim() === '') setError(current => ({ ...current, errLastName: 'last name is require' }));
      if (username.trim() === '') setError(current => ({ ...current, errUsername: 'username is require' }));
      if (email.trim() === '') setError(current => ({ ...current, errEmail: 'email is require' }));

      const res = await axios.post('http://localhost:9999/register', {
        username,
        password,
        confirmPassword,
        email,
        firstName,
        lastName,
      });
      // history.push('/');
      // console.log(res);
    } catch (err) {
      setError({
        ...err,
        errUsername: err.response.data.usernameError,
        errPassword: err.response.data.passwordError,
        errEmail: err.response.data.emailError,
      });
    }
  };
  return (
    <div className="FormRegister">
      <TextTitle />
      <form className="formRegis" onSubmit={handleSumbitRegister}>
        <input
          type="text"
          className={`inputfname ${error ? 'is-invalid' : ''}`}
          placeholder="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        {error.errFirstName ? <div className="invalid-feedback">{error.errFirstName}</div> : ''}
        <input
          type="text"
          className={`inputlname ${error ? 'is-invalid' : ''}`}
          placeholder="Last Name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        {error.errLastName ? <div className="invalid-feedback">{error.errLastName}</div> : ''}
        <input
          type="text"
          className={`inputUsername ${error ? 'is-invalid' : ''}`}
          placeholder="Username"
          value={username}
          onChange={e => setusername(e.target.value)}
        />
        {error.errUsername ? <div className="invalid-feedback">{error.errUsername}</div> : ''}
        <input
          type="password"
          className={`inputPass ${error ? 'is-invalid' : ''}`}
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error.errPassword ? <div className="invalid-feedback">{error.errPassword}</div> : ''}
        <input
          type="password"
          className={`inputConfirmPass ${error ? 'is-invalid' : ''}`}
          placeholder=" Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        {error.errConfirmPassword ? <div className="invalid-feedback">{error.errConfirmPassword}</div> : ''}
        <input
          type="email"
          className={`inputEmail ${error ? 'is-invalid' : ''}`}
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {error.errEmail ? <div className="invalid-feedback">{error.errEmail}</div> : ''}
        <button type="submit" className="btnRegister">
          Register
        </button>
      </form>
    </div>
  );
}

export default FormRegister;
