import React from 'react';
import paypal from '../../image/payment/paypal.png';
import visa from '../../image/payment/visa.png';
import mastercard from '../../image/payment/marstercard.png';
function OnlinePayment() {
  return (
    <div className="onlinePayment">
      <p className="titelTextPayment">ชำระเงินผ่านบัตร/ช่องทางออนไลน์</p>
      <div className="iconOnlinePay">
        <img src={paypal} alt="" />
        <img src={visa} alt="" />
        <img src={mastercard} alt="" />
      </div>
    </div>
  );
}

export default OnlinePayment;
