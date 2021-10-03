import React from 'react';
// import BoxMenu from './BoxMenu';

function BoxUserMenu() {
  return (
    <div className="boxUserMenu">
      <div className="accountMenu">
        <br />
        <br />
        {/* <BoxMenu /> */}
        <div className="box-menu">
          <i className="fas fa-user-circle"></i>
          <p>ข้อมูลของฉัน</p>
        </div>
        <div className="box-menu">
          <i className="fas fa-home"></i>
          <p>ที่อยู่ของฉัน</p>
        </div>
        <div className="box-menu">
          <i class="fas fa-archive"></i>
          <p>คำสั่งซื้อ</p>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default BoxUserMenu;
