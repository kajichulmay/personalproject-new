import { NavLink } from 'react-router-dom';
import imgBookMock from '../../image/cover/onepice.png';
function BookStockCard() {
  return (
    <div className="boxStock">
      <div className="imgProduct">
        <img src={imgBookMock} />
      </div>
      <p>ดาบพิฆาตอสูร</p>
      <p>Manga</p>
      <p>85</p>
      <p>200</p>
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
