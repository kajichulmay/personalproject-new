import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../../context/authContext';
import { CartContext } from '../../context/CartContext';
import BookList from './BookList';

function BookContainerHome() {
  const { bookTransaction } = useContext(CartContext);

  const newBookTransaction = [...bookTransaction];
  const filterBookNineLatest = newBookTransaction.sort((a, b) => b.id - a.id).splice(0, 9);

  return (
    <div className="bookContent">
      {filterBookNineLatest.map(item => (
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

export default BookContainerHome;
