import React from 'react';
import krungsri from '../../image/payment/krungsri.png';
function NoticChooseBank({ imageBank, bankId }) {
  return (
    <div className="bankBox">
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="bank" value={bankId} />
        <img src={imageBank} />
      </div>
      <p>PIKABOOKS CO,. Ltd</p>
      <p>066666666</p>
    </div>
  );
}

export default NoticChooseBank;
