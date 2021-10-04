import React from 'react';
import BoxAddressEdit from '../components/Address/BoxAddressEdit';

import BoxUserMenu from '../components/my-account/BoxUserMenu';

function MyAddress() {
  return (
    <div className="MyAccount">
      <div className="containerBlockUser">
        <BoxUserMenu />
        <BoxAddressEdit />
      </div>
    </div>
  );
}

export default MyAddress;
