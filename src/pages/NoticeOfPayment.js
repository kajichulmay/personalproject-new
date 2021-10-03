import React from 'react';
import FormPayment from '../components/NoticeofPayment/FormPayment';
import imgNotice from '../image/login/5048821.jpg';
function NoticeOfPayment() {
  return (
    <div className="HowtoBuyBlock">
      <div className="containerBlockHowtoBuy">
        <FormPayment />
        <div className="imgContainer">
          <img className="imgBlock" src={imgNotice}></img>
        </div>
      </div>
    </div>
  );
}

export default NoticeOfPayment;
