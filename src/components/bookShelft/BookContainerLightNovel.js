import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../../context/authContext';
import BookList from './BookList';
function BookContainerLightNovel() {
  const { bookTransaction } = useContext(AuthContext);
  const newBookTransaction = [...bookTransaction];
  const filterBookLatestLightNovel = newBookTransaction
    .sort((a, b) => b.id - a.id)
    .filter(item => item.categoryId === 2);
  return (
    <div className="bookContent">
      {filterBookLatestLightNovel.map(item => (
        <BookList key={item.id} imageUrl={item.imageUrl} name={item.name} volumn={item.volumn} price={item.price} />
      ))}
    </div>
  );
}
export default BookContainerLightNovel;
