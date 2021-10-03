import React from 'react';
import FormLogin from '../components/Login/FormLogin';
import imgLogin from '../image/login/3594082.jpg';
function Login() {
  return (
    <div className="Login">
      <div className="containerBlockForm">
        <div className="imgContainer">
          <img className="imgBlockLog" src={imgLogin}></img>
        </div>
        <FormLogin />
      </div>
    </div>
  );
}

export default Login;
