import React from 'react';

function SumPriceBox({ sumPrice, setSumPrice, sumAmount, price }) {
  const newPrice = price * sumAmount;
  setSumPrice(newPrice);
  return (
    <div className="sumPriceBook">
      <p>{sumPrice} THB</p>
    </div>
  );
}

export default SumPriceBox;
