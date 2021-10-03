import React from 'react';
import FormEditAccount from './FormEditAccount';
import BoxAccount from './BoxAccount';

function BoxUserEdit() {
  return (
    <div className="boxUserEdit">
      <div className="account-edit">
        <br />
        <br />
        <p style={{ textAlign: 'center', width: '100%' }}>ข้อมูลส่วนตัว</p>
        <BoxAccount />
        <FormEditAccount />
        <br />
        <br />
      </div>
    </div>
  );
}

export default BoxUserEdit;
