import React from 'react';
import BookDetail from '../components/Book/BookDetail';
import ContentBook from '../components/Book/ContentBook';

function Book() {
  return (
    <div className="Book">
      <div className="bookShelft">
        <BookDetail />
      </div>
      <ContentBook />
    </div>
  );
}

export default Book;
