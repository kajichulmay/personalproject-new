import React from 'react';
import TextTitle from './TextTitle';

function FormLogin() {
  return (
    <div className="FormLogin">
      <TextTitle />
      <form className="formLog">
        <input type="text" className="inputUsername" placeholder="Username" />
        <input type="password" className="inputPass" placeholder="Password" />
        <button type="submit" className="btnLogin">
          Login
        </button>
      </form>
    </div>
  );
}

export default FormLogin;
