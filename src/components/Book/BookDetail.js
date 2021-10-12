import React from 'react';

import BookDetailShop from './BookDetailShop';
function BookDetail({ oneBook, amount, setAmount, newPrice, handleClickMinusBook, handleClickPlusBook }) {
  return (
    <div className="containerBookDetail">
      <div className="bookPic">
        <img src={oneBook?.imageUrl} />
      </div>
      <BookDetailShop
        oneBook={oneBook}
        amount={amount}
        setAmount={setAmount}
        newPrice={newPrice}
        handleClickMinusBook={handleClickMinusBook}
        handleClickPlusBook={handleClickPlusBook}
      />
    </div>
  );
}

export default BookDetail;
