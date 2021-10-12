import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import BookStockCard from './BookStockCard';

function BookStockContainer() {
  const { bookTransaction } = useContext(CartContext);
  const newBookTransaction = [...bookTransaction];
  const filterBookLatest = newBookTransaction.sort((a, b) => b.id - a.id);

  console.log(bookTransaction);
  return (
    <>
      {filterBookLatest.map(item => (
        <BookStockCard
          key={item.id}
          imageUrl={item.imageUrl}
          categoryId={item.Category.name}
          name={item.name}
          price={item.price}
          amount={item.amount}
          bookId={item.id}
        />
      ))}
    </>
  );
}

export default BookStockContainer;
