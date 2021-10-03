import { NavLink } from 'react-router-dom';
import BookStockContainer from '../components/updateStock/BookStockContainer';

function UpdateStock() {
  return (
    <div className="updateStock">
      <div className="containerBlockUpdateStock">
        <div className="boxHead">
          <p>In Stock</p>
          <button className="btnAdd">
            <NavLink to="/add-book-stock" className="textAddbtn">
              + Add New Product
            </NavLink>
          </button>
        </div>
        <div className="boxelement">
          <div className="titleHead">
            <p>Product</p>
            <p>Name</p>
            <p>Category</p>
            <p>Price</p>
            <p>Amount</p>
            <p></p>
          </div>
          <BookStockContainer />
        </div>
      </div>
    </div>
  );
}

export default UpdateStock;
