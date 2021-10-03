import React from 'react';
import AllBank from './AllBank';
import OnlinePayment from './OnlinePayment';
function HowtoPayment() {
  return (
    <div class="howPayment">
      <p>วิธีการชำระเงิน</p>
      <p className="titleTextPayment">ชำระเงินผ่านธนาคาร</p>
      <AllBank />
      <AllBank />
      <AllBank />
      <OnlinePayment />
    </div>
  );
}

export default HowtoPayment;
