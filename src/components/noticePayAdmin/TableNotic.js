import axios from '../../config/axios';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import OrderTable from '../CustomerOrder/OrderTable';

function TableNotic() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const feltchOrder = async () => {
      const orderAll = await axios.get('/order/all');
      setOrder(orderAll.data.AllOrder);
    };
    feltchOrder();
  }, []);
  console.log(order);
  return (
    <div className="boxNotice">
      <div className="table-Notice">
        <br />
        <br />
        <p style={{ textAlign: 'center', width: '100%' }}>แจ้งชำระเงิน</p>

        <table className="tableOrder">
          <tr>
            <th>หมายเลข Order</th>
            <th>วันที่</th>
            <th>ชื่อ</th>
            <th>จ่ายเงิน</th>
            <th>ยอดซื้อ</th>
          </tr>
          {order.map(item => (
            <OrderTable
              key={item.id}
              id={item.id}
              date={item.date}
              status={item.status}
              firstName={item.User.firstName}
              lastName={item.User.lastName}
              price={item.sumPrice}
            />
          ))}
        </table>

        <br />
        <br />
      </div>
    </div>
  );
}

export default TableNotic;
