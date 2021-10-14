import React from 'react';

function OrderTableMyOrder({ price, firstName, lastName, id, date }) {
  return (
    <tr>
      <td>#000{id}</td>
      <td>{date.slice(0, 10)}</td>
      <td> {`${firstName}  ${lastName}`}</td>
      <td>{price} Bath</td>
    </tr>
  );
}

export default OrderTableMyOrder;
