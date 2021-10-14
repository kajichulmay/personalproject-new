import React from 'react';
import krungsri from '../../image/payment/krungsri.png';
function AllBank({ imageUrl }) {
  return (
    <div className="allBank">
      <div className="bankBox">
        <img src={imageUrl} />
        <p>PIKABOOKS CO,. Ltd</p>
        <p>066666666</p>
      </div>
    </div>
  );
}

export default AllBank;
