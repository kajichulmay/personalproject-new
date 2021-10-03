import React from 'react';
import FormRegister from '../components/Registor/FormRegister';
import imgLogin from '../image/login/3594082.jpg';
function Register() {
  return (
    <div className="Register">
      <div className="containerBlockForm">
        <div className="imgContainer">
          <img className="imgBlockLog" src={imgLogin}></img>
        </div>
        <FormRegister />
      </div>
    </div>
  );
}

export default Register;
