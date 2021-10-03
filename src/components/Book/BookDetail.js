import React from 'react';
import imgbookMock from '../../image/cover/onepice.png';
import BookDetailShop from './BookDetailShop';
function BookDetail() {
  return (
    <div className="containerBookDetail">
      <div className="bookPic">
        <img src={imgbookMock} />
      </div>
      <BookDetailShop />
    </div>
  );
}

export default BookDetail;
