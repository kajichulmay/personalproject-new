import React from 'react';

function FormEditAddress() {
  return (
    <>
      <textarea className="textAddress"></textarea>
      <br />
      <br />
      <div className="btnClickSave">
        <button type="button" className="btn btn-primary">
          แก้ไขที่อยู่จัดส่ง
        </button>
      </div>
      <div className="btnClickCancle">
        <button type="button" class="btn btn-danger">
          ยกเลิก
        </button>
      </div>
    </>
  );
}
export default FormEditAddress;
