import React from 'react';
import BoxImgBanner from './BoxImgBanner';
function Banner() {
  return (
    <div className="Banner">
      <div className="contents">
        <BoxImgBanner />
        <BoxImgBanner />
        <BoxImgBanner />
      </div>
      <div className="slide left">
        <span className="fas fa-chevron-circle-left"></span>
      </div>
      <div className="slide right">
        <span className="fas fa-chevron-circle-right"></span>
      </div>
    </div>
  );
}

export default Banner;
