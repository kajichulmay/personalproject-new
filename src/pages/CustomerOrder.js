import React from 'react';
import BoxShowMyOrder from '../components/CustomerOrder/BoxShowMyOrder';
import BoxUserMenu from '../components/my-account/BoxUserMenu';

function CustomerOrder() {
  return (
    <div className="MyAccount">
      <div className="containerBlockUser">
        <BoxUserMenu />
        <BoxShowMyOrder />
      </div>
    </div>
  );
}
export default CustomerOrder;
