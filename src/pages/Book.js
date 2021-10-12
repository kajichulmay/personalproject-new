import axios from '../config/axios';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import BookDetail from '../components/Book/BookDetail';
import ContentBook from '../components/Book/ContentBook';

function Book() {
  const params = useParams();
  const [oneBook, setOneBook] = useState({});
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState('');
  const [isBookAmount, setIsBookAmount] = useState('');
  const [orderId, setOrderId] = useState('');
  const [bookId, setBookId] = useState('');

  useEffect(() => {
    const fetchOneBook = async () => {
      const res = await axios.get(`/book/${params.bookId}`);
      setOneBook(res.data.BookOne);
      setPrice(res.data.BookOne.price);
      setIsBookAmount(res.data.BookOne.amount);
    };
    fetchOneBook();
  }, []);
  const newPrice = oneBook?.price * amount;
  const handleClickBuyBook = async e => {
    setPrice(newPrice);
    // const res = axios.post('/book', { amount, price, orderId, bookId });
  };

  const handleClickPlusBook = () => {
    if (isBookAmount > 1) {
      setAmount(cur => cur + 1);
      setIsBookAmount(cur => cur - 1);
    }
  };

  const handleClickMinusBook = () => {
    if (amount > 1) {
      setAmount(cur => cur - 1);
      setIsBookAmount(cur => cur + 1);
    }
  };

  return (
    <div className="Book">
      <div className="bookShelft">
        <BookDetail
          oneBook={oneBook}
          amount={amount}
          setAmount={setAmount}
          handleClickPlusBook={handleClickPlusBook}
          handleClickMinusBook={handleClickMinusBook}
          handleClickPlusBook={handleClickPlusBook}
          newPrice={newPrice}
        />
      </div>
      <ContentBook oneBook={oneBook} />
    </div>
  );
}

export default Book;
