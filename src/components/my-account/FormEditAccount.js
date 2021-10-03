import React from 'react';

function FormEditAccount() {
  return (
    <>
      <div className="box-edit">
        <span>ชื่อ:</span>
        <input type="text" className="personalform"></input>
      </div>
      <div className="box-edit">
        <span>นามสกุล:</span>
        <input type="text" className="personalform"></input>
      </div>
      <div className="box-edit">
        <span>อีเมล์:</span>
        <input type="email" className="personalform"></input>
      </div>
      <br />
      <br />
      <div className="btnClickSave">
        <button type="button" class="btn btn-primary">
          แก้ไขข้อมูลส่วนตัว
        </button>
      </div>
    </>
  );
}

export default FormEditAccount;
