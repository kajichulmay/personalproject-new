import React from 'react';

function OrderTable({ price, firstName, lastName, id, date, status }) {
  // const newDate = new Date date.toLocaleDateString('en-US');

  return (
    <tr>
      <td>#000{id}</td>
      <td>{date.slice(0, 10)}</td>
      <td> {`${firstName}  ${lastName}`}</td>
      <td>{status ? 'จ่ายเงินเรียบร้อย' : 'รอการจ่ายเงิน'}</td>
      <td>{price} Bath</td>
    </tr>
  );
}

export default OrderTable;
