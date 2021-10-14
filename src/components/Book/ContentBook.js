import React from 'react';

function ContentBook({ oneBook }) {
  return (
    <div className="contentBooks">
      <div className="textIn">
        <p className="headproduct">ข้อมูลสินค้า :</p>
        <p className="nameBook">{oneBook?.name}</p>
        <p>เนื้อเรื่องย่อ </p>
        <p className="storyBooks">{oneBook?.description}</p>
      </div>
    </div>
  );
}

export default ContentBook;
