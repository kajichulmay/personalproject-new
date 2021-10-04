import React from 'react';

function BoxAccount() {
  return (
    <>
      <p style={{ textAlign: 'center', width: '100%' }}>ข้อมูลส่วนตัว</p>
      <div className="box-edit">
        <span>ชื่อ :</span>
        <span className="valueName"></span>
      </div>
      <div className="box-edit">
        <span>นามสกุล :</span>
        <span className="valueName"></span>
      </div>
      <div className="box-edit">
        <span>อีเมล์ :</span>
        <span className="valueName"></span>
      </div>
      <div className="btnClickEdit">
        <i className="fas fa-pencil-alt"></i>
        <span>แก้ไขข้อมูลส่วนตัว</span>
      </div>
    </>
  );
}

export default BoxAccount;
