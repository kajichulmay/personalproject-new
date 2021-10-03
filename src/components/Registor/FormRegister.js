import React from 'react';
import TextTitle from '../Login/TextTitle';

function FormRegister() {
  return (
    <div className="FormRegister">
      <TextTitle />
      <form className="formRegis">
        <input type="text" className="inputfname" placeholder="First Name" />
        <input type="text" className="inputlname" placeholder="Last Name" />
        <input type="text" className="inputUsername" placeholder="Username" />
        <input type="password" className="inputPass" placeholder="Password" />
        <input type="password" className="inputConfirmPass" placeholder=" Confirm Password" />
        <input type="email" className="inputEmail" placeholder="Email" />
        <button type="submit" className="btnRegister">
          Register
        </button>
      </form>
    </div>
  );
}

export default FormRegister;
