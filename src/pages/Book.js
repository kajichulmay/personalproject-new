import axios from '../config/axios';
import { useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import BookDetail from '../components/Book/BookDetail';
import ContentBook from '../components/Book/ContentBook';
import { AuthContext } from '../context/authContext';
import { CartContext } from '../context/CartContext';

function Book() {
  const params = useParams();
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const [oneBook, setOneBook] = useState({});
  const [sumAmount, setSumAmount] = useState(1);
  const [sumPrice, setSumPrice] = useState();
  const { setToggleUpdateCart } = useContext(CartContext);
  useEffect(() => {
    const fetchOneBook = async () => {
      const res = await axios.get(`/book/${params.bookId}`);
      setOneBook(res.data.BookOne);
      setSumPrice(res.data.BookOne.price);
    };
    fetchOneBook();
  }, [params]);

  const handleClickAdd = () => {
    if (oneBook.amount > sumAmount) {
      setSumAmount(cur => cur + 1);
    }
  };
  const handleClickDel = () => {
    if (sumAmount > 1) {
      setSumAmount(cur => cur - 1);
    }
  };
  const handleClickSubmitBuy = async () => {
    try {
      if (user) {
        const createCart = await axios.post('/addCart', {
          sumPrice,
          sumAmount,
          bookId: oneBook.id,
          userId: user.id,
          isConfirm: false,
        });
        setToggleUpdateCart(cur => !cur);
      } else {
        history.push('/login');
      }
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <div className="Book">
      <div className="bookShelft">
        <BookDetail
          oneBook={oneBook}
          handleClickAdd={handleClickAdd}
          amount={sumAmount}
          handleClickDel={handleClickDel}
          setSumPrice={setSumPrice}
          sumPrice={sumPrice}
          handleClickSubmitBuy={handleClickSubmitBuy}
        />
      </div>
      <ContentBook oneBook={oneBook} />
    </div>
  );
}

export default Book;
