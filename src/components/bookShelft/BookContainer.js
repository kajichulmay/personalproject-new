import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../../context/authContext';
import BookList from './BookList';

function BookContainer() {
  const { bookTransaction } = useContext(AuthContext);
  const newBookTransaction = [...bookTransaction];
  const filterBookLatest = newBookTransaction.sort((a, b) => b.id - a.id);
  return (
    <div className="bookContent">
      {filterBookLatest.map(item => (
        <BookList
          key={item.id}
          imageUrl={item.imageUrl}
          name={item.name}
          volumn={item.volumn}
          price={item.price}
          bookId={item.id}
        />
      ))}
    </div>
  );
}

export default BookContainer;
