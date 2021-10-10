import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import BookStockCard from './BookStockCard';

function BookStockContainer() {
  const { bookTransaction } = useContext(AuthContext);
  const newBookTransaction = [...bookTransaction];
  const filterBookLatest = newBookTransaction.sort((a, b) => b.id - a.id);
  return (
    <>
      {filterBookLatest.map(item => (
        <BookStockCard
          key={item.id}
          imageUrl={item.imageUrl}
          categoryId={item.categoryId}
          name={item.name}
          price={item.price}
          amount={item.amount}
        />
      ))}
    </>
  );
}

export default BookStockContainer;
