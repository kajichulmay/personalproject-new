import React from 'react';

import BookDetailShop from './BookDetailShop';
function BookDetail({ oneBook, handleClickAdd, amount, handleClickDel, setSumPrice, sumPrice, handleClickSubmitBuy }) {
  return (
    <div className="containerBookDetail">
      <div className="bookPic">
        <img src={oneBook?.imageUrl} />
      </div>
      <BookDetailShop
        oneBook={oneBook}
        handleClickAdd={handleClickAdd}
        amount={amount}
        handleClickDel={handleClickDel}
        setSumPrice={setSumPrice}
        sumPrice={sumPrice}
        handleClickSubmitBuy={handleClickSubmitBuy}
      />
    </div>
  );
}

export default BookDetail;
