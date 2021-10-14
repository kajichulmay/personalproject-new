import axios from '../../config/axios';
import { useEffect } from 'react';
import OrderTable from './OrderTable';
import { useState } from 'react/cjs/react.development';

import OrderTableMyOrder from './OrderTableMyOrder';

function BoxShowMyOrder() {
  const [myOrder, setMyOrder] = useState([]);

  useEffect(() => {
    const feltOrder = async () => {
      try {
        const myOrder = await axios.get('/order/myorder');
        // console.log(myOrder.data);
        setMyOrder(myOrder.data.NoticOrder);
      } catch (err) {
        console.dir(err);
      }
    };
    feltOrder();
  }, []);
  console.log(myOrder);
  return (
    <div className="boxUserEdit">
      <div className="account-edit">
        <br />
        <br />
        <p style={{ textAlign: 'center', width: '100%' }}>คำสั่งซื้อ</p>
        {myOrder.length > 0 ? (
          <table className="tableOrder">
            <tr>
              <th>หมายเลข Order</th>
              <th>วันที่</th>
              <th>ชื่อ</th>
              <th>ยอดซื้อ</th>
            </tr>
            {myOrder.map(item => (
              <OrderTableMyOrder
                key={item.id}
                price={item.sumPrice}
                date={item.date}
                firstName={item.User.firstName}
                lastName={item.User.lastName}
                id={item.id}
              />
            ))}
          </table>
        ) : (
          <p>คุณยังไม่มีคำสั่งซื้อสินค้า</p>
        )}

        <br />
        <br />
      </div>
    </div>
  );
}

export default BoxShowMyOrder;
