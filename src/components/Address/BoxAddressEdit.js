import React from 'react';
import BoxAddress from './BoxAddress';
import FormEditAddress from './FormEditAddress';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { useState } from 'react';
function BoxAddressEdit() {
  const { myAccountUser, setMyAccoutUser } = useContext(AuthContext);
  const { address } = myAccountUser;
  const [isEditting, setIsEdiiting] = useState(false);
  return (
    <div className="boxUserEdit">
      <div className="account-edit">
        <br />
        <br />
        <p style={{ textAlign: 'center', width: '100%' }}>ที่อยู่</p>
        {isEditting ? (
          <FormEditAddress setIsEdiiting={setIsEdiiting} />
        ) : (
          <BoxAddress address={address} setIsEdiiting={setIsEdiiting} />
        )}
        <br />
        <br />
      </div>
    </div>
  );
}

export default BoxAddressEdit;
