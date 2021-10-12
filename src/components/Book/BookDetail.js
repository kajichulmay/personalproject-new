import React from 'react';

import BookDetailShop from './BookDetailShop';
function BookDetail({ oneBook }) {
  return (
    <div className="containerBookDetail">
      <div className="bookPic">
        <img src={oneBook?.imageUrl} />
      </div>
      <BookDetailShop oneBook={oneBook} />
    </div>
  );
}

export default BookDetail;
