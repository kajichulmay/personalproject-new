import React from 'react';
import Detail from '../components/howtoBuy/Detail';
import imghowTobuy from '../image/login/5058440.jpg';
function HowToBuy() {
  return (
    <div className="HowtoBuyBlock">
      <div className="containerBlockHowtoBuy">
        <Detail />
        <div className="imgContainer">
          <img className="imgBlock" src={imghowTobuy}></img>
        </div>
      </div>
    </div>
  );
}

export default HowToBuy;
