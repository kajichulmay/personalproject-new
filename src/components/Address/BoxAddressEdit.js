import React from 'react';
import BoxAddress from './BoxAddress';
import FormEditAddress from './FormEditAddress';

function BoxAddressEdit() {
  return (
    <div className="boxUserEdit">
      <div className="account-edit">
        <br />
        <br />
        <BoxAddress />
        <FormEditAddress />
        <br />
        <br />
      </div>
    </div>
  );
}

export default BoxAddressEdit;
