import React from 'react';
import BoxUserEdit from '../components/my-account/BoxUserEdit';
import BoxUserMenu from '../components/my-account/BoxUserMenu';

function PersonalUser() {
  return (
    <div className="MyAccount">
      <div className="containerBlockUser">
        <BoxUserMenu />
        <BoxUserEdit />
      </div>
    </div>
  );
}

export default PersonalUser;
