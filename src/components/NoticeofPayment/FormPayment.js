import axios from '../../config/axios';
import React from 'react';
import NoticChooseBank from './NoticChooseBank';
import { useState, useEffect } from 'react/cjs/react.development';
function FormPayment() {
  const [showOptionBank, setShowOptionBank] = useState([]);

  useEffect(() => {
    const feltBank = async () => {
      const bank = await axios.get('/notice-of-payment');
      setShowOptionBank(bank.data.getBank);
    };

    feltBank();
  }, []);

  return (
    <div className="detailBlock">
      <form className="formNoticePayment">
        <h4>แจ้งชำระเงิน</h4>
        <p>รายละเอียดการโอนเงิน</p>
        {showOptionBank.map(item => (
          <NoticChooseBank key={item.id} name={item.name} bankId={item.id} imageBank={item.imageUrl} />
        ))}
        <p>เลือกออเดอร์</p>
        <select>
          <option>orderId1</option>
          <option>orderId2</option>
        </select>
        <p>วันที่ชำระเงิน</p>
        <input type="date" />
        <p>หลักฐานการโอนเงิน</p>
        <div className="uploadFile">
          <input type="file" className="uploadeFileNotic" />
        </div>
        <button className="btnSubmitNotice">แจ้งชำระเงิน</button>
      </form>
    </div>
  );
}

export default FormPayment;
