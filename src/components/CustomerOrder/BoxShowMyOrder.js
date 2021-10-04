import React from 'react';
import OrderTable from './OrderTable';

function BoxShowMyOrder() {
  return (
    <div className="boxUserEdit">
      <div className="account-edit">
        <br />
        <br />
        <p style={{ textAlign: 'center', width: '100%' }}>คำสั่งซื้อ</p>
        <table className="tableOrder">
          <tr>
            <th>หมายเลข Order</th>
            <th>วันที่</th>
            <th>ชื่อ</th>
            <th>ยอดซื้อ</th>
          </tr>
          <OrderTable />
          <OrderTable />
          <OrderTable />
          <OrderTable />
        </table>
        <br />
        <br />
      </div>
    </div>
  );
}

export default BoxShowMyOrder;
