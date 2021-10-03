import React from 'react';

function BoxSummary() {
  return (
    <div className="shopBox">
      <div className="titleShopHead">
        <div className="textHead">
          <p>สรุปคำสั่งซื้อ</p>
        </div>
      </div>
      <div className="boxShipping">
        <span>ค่าจัดส่ง</span>
        <span>30</span>
      </div>
      <div className="boxSumprice">
        <span>ราคาสุทธิ</span>
        <span>115</span>
      </div>
      <div className="boxSubmitPrice">
        <button className="btnBuy">สั่งซื้อ</button>
      </div>
    </div>
  );
}

export default BoxSummary;
