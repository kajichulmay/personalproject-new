import { NavLink } from 'react-router-dom';
import imgBookMock from '../../image/cover/onepice.png';
function BookStockCard({ imageUrl, name, categoryId, price, amount }) {
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
        <button className="btn btn-link text-secondary">
          <i className="bi bi-x-circle btnDel"></i>
        </button>
        <button className="btn btn-link text-secondary">
          <NavLink to="/edit-book-stock" className="btnEdit">
            <i className="bi bi-pencil-square"></i>
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default BookStockCard;
