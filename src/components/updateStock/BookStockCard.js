import axios from '../../config/axios';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
function BookStockCard({ imageUrl, name, categoryId, price, amount, bookId }) {
  const { bookTransaction, setBookTransaction } = useContext(CartContext);
  const history = useHistory();
  const handleClickDelBook = async () => {
    try {
      const idx = bookTransaction.findIndex(item => item.id === bookId);
      const newBookTransaction = [...bookTransaction];
      newBookTransaction.splice(idx, 1);
      // console.log(newBookTransaction);
      setBookTransaction(newBookTransaction);
      await axios.delete(`/update-stock/${bookId}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="boxStock">
      <div className="imgProduct">
        <img src={imageUrl} />
      </div>
      <p>{name}</p>
      <p>{categoryId}</p>
      <p>{price}</p>
      <p>{amount}</p>
      <div className="buttonBlock">
        <button className="btn btn-link text-secondary" onClick={handleClickDelBook}>
          <i className="bi bi-x-circle btnDel"></i>
        </button>
        <button
          className="btn btn-link text-secondary btnEdit"
          onClick={() => history.push(`/edit-book-stock/${bookId}`)}
        >
          <i className="bi bi-pencil-square"></i>
        </button>
      </div>
    </div>
  );
}

export default BookStockCard;
