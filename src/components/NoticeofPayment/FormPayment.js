import React from 'react';
import NoticChooseBank from './NoticChooseBank';
function FormPayment() {
  return (
    <div className="detailBlock">
      <form className="formNoticePayment">
        <h4>แจ้งชำระเงิน</h4>
        <p>รายละเอียดการโอนเงิน</p>
        <NoticChooseBank />
        <NoticChooseBank />
        <NoticChooseBank />
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
