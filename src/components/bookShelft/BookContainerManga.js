import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../../context/authContext';
import BookList from './BookList';

function BookContainerManga() {
  const { bookTransaction } = useContext(AuthContext);
  const newBookTransaction = [...bookTransaction];
  const filterBookLatestManga = newBookTransaction.sort((a, b) => b.id - a.id).filter(item => item.categoryId === 1);
  return (
    <div className="bookContent">
      {filterBookLatestManga.map(item => (
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

export default BookContainerManga;
