import axios from '../../config/axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import AllBank from './AllBank';
import OnlinePayment from './OnlinePayment';

function HowtoPayment() {
  const [showOptionBank, setShowOptionBank] = useState([]);

  useEffect(() => {
    const feltBank = async () => {
      const bank = await axios.get('/bank');
      setShowOptionBank(bank.data.getBank);
    };

    feltBank();
  }, []);

  return (
    <div className="howPayment">
      <p>วิธีการชำระเงิน</p>
      <p className="titleTextPayment">ชำระเงินผ่านธนาคาร</p>
      {showOptionBank.map(item => (
        <AllBank key={item.id} imageUrl={item.imageUrl} />
      ))}

      <br />
      <br />
      <br />
    </div>
  );
}

export default HowtoPayment;
