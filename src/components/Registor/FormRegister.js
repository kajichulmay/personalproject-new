import React, { useState } from 'react';
import TextTitle from '../Login/TextTitle';
import axios from '../../config/axios';
import { useHistory } from 'react-router';
import validator from 'validator';
function FormRegister() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState({});

  const history = useHistory();
  const handleSumbitRegister = async e => {
    try {
      e.preventDefault();
      const newError = {};
      if (firstName.trim() === '') newError.errFirstName = 'first name is require';
      if (lastName.trim() === '') newError.errLastName = 'last name is require';
      if (username.trim() === '') newError.errUsername = 'username is require';
      if (email.trim() === '') newError.errEmail = 'email is require';
      if (password.length < 6) newError.errPassword = 'pasword more than 6 length';
      setError(newError);

      if (Object.keys(newError).length === 0) {
        const res = await axios.post('/register', {
          username,
          password,
          confirmPassword,
          email,
          firstName,
          lastName,
        });
        history.push('/login');
        console.log(res);
      }
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
        {error.errFirstName && <div className="invalid-feedback">{error.errFirstName}</div>}
        <input
          type="text"
          className={`inputlname ${error ? 'is-invalid' : ''}`}
          placeholder="Last Name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        {error.errLastName && <div className="invalid-feedback">{error.errLastName}</div>}
        <input
          type="text"
          className={`inputUsername ${error ? 'is-invalid' : ''}`}
          placeholder="Username"
          value={username}
          onChange={e => setusername(e.target.value)}
        />
        {error.errUsername && <div className="invalid-feedback">{error.errUsername}</div>}
        <input
          type="password"
          className={`inputPass ${error ? 'is-invalid' : ''}`}
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error.errPassword && <div className="invalid-feedback">{error.errPassword}</div>}
        <input
          type="password"
          className={`inputConfirmPass ${error ? 'is-invalid' : ''}`}
          placeholder=" Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        {error.errConfirmPassword && <div className="invalid-feedback">{error.errConfirmPassword}</div>}
        <input
          type="email"
          className={`inputEmail ${error ? 'is-invalid' : ''}`}
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {error.errEmail && <div className="invalid-feedback">{error.errEmail}</div>}
        <button className="btnRegister">Register</button>
      </form>
    </div>
  );
}

export default FormRegister;
