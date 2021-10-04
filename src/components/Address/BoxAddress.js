import React from 'react';

function BoxAddress() {
  return (
    <>
      <p style={{ textAlign: 'center', width: '100%' }}>ที่อยู่</p>
      <p>39/60 หมู่บ้านซื่อตรง 28 แขวงนวลจันทร์ เขตบึงกุ่ม กทม 10230 </p>

      <div className="btnClickEdit">
        <i className="fas fa-pencil-alt"></i>
        <span>เพิ่มที่อยู่</span>
      </div>
    </>
  );
}

export default BoxAddress;
