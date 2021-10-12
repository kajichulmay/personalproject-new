import axios from '../config/axios';
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import BookDetail from '../components/Book/BookDetail';
import ContentBook from '../components/Book/ContentBook';
import { AuthContext } from '../context/authContext';

function Book() {
  const params = useParams();
  const [oneBook, setOneBook] = useState({});

  useEffect(() => {
    const fetchOneBook = async () => {
      const res = await axios.get(`/book/${params.bookId}`);
      setOneBook(res.data.BookOne);

      // setIsBookAmount(res.data.BookOne.amount);
    };
    fetchOneBook();
  }, []);

  return (
    <div className="Book">
      <div className="bookShelft">
        <BookDetail oneBook={oneBook} />
      </div>
      <ContentBook oneBook={oneBook} />
    </div>
  );
}

export default Book;
