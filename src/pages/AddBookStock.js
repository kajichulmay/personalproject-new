import axios from '../config/axios';
import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';
function AddBookStock() {
  const [input, setInput] = useState({
    name: '',
    volumn: '',
    categoryId: '',
    price: '',
    amount: '',
    imageUrl: '',
    imageCoverUrl: '',
    description: '',
    status: true,
  });
  const [imageUrl, setImageUrl] = useState();
  const [imageCoverUrl, setImageCoverUrl] = useState();
  const { name, volumn, categoryId, price, amount, description, status } = input;
  const [showOptionCategory, setShowOptionCategory] = useState([]);
  const [errorAddForm, setErrorAddForm] = useState({});
  const { setToggleUpdateBook, toggleUpdateBook } = useContext(CartContext);
  const [showImageCover, setShowImageCover] = useState(null);
  const [showImageBanner, setShowImageBanner] = useState(null);
  const history = useHistory();
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get('/category');
        const categories = res.data.category;
        setShowOptionCategory(categories);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchCategory();
  }, []);
  const handleChangeInput = e => {
    setInput(current => ({ ...current, [e.target.name]: e.target.value }));
  };
  // console.log(errorAddForm);
  const handleChangeFileImageUrl = e => {
    setImageUrl(e.target.files[0]);
    setShowImageCover(URL.createObjectURL(e.target.files[0]));
  };
  const handleChangeFileImageBannerUrl = e => {
    setImageCoverUrl(e.target.files[0]);
    setShowImageBanner(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmitForm = async e => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('volumn', volumn);
      formData.append('price', price);
      formData.append('amount', amount);
      formData.append('categoryId', categoryId);
      formData.append('picture', imageUrl);
      formData.append('picture', imageCoverUrl);
      formData.append('description', description);
      formData.append('status', status);

      const res = await axios.post('/add-book-stock', formData);
      setToggleUpdateBook(cur => !cur);
      history.push('/update-stock');
    } catch (err) {
      console.dir(err);
      // setErrorAddForm({ ...err, errBack: err.response.data.message });
    }
  };

  return (
    <div className="AddBookStock">
      <div className="AddBookContent">
        <form className="form-group formAddStock" onSubmit={handleSubmitForm}>
          <label htmlFor="name">ชื่อสินค้า</label>
          <input
            type="text"
            className={`form-control ${errorAddForm.name ? 'is-invalid' : ''}`}
            name="name"
            onChange={handleChangeInput}
            value={name}
          />
          {errorAddForm.name && <div className="invalid-feedback">{errorAddForm.name}</div>}
          <label htmlFor="volumn">เล่มที่</label>
          <input
            type="text"
            className={`form-control ${errorAddForm.volumn ? 'is-invalid' : ''}`}
            name="volumn"
            onChange={handleChangeInput}
            value={volumn}
          />
          {errorAddForm.volumn && <div className="invalid-feedback">{errorAddForm.volumn}</div>}
          <label htmlFor="category">ประเภทหนังสือ</label>
          <select
            className={`form-select ${errorAddForm.categoryId ? 'is-invalid' : ''}`}
            onChange={handleChangeInput}
            name="categoryId"
          >
            <option selected disabled>
              ...
            </option>
            {showOptionCategory.map(item => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          {errorAddForm.categoryId && <div className="invalid-feedback">{errorAddForm.categoryId}</div>}
          <label htmlFor="price">ราคา</label>
          <input
            type="number"
            className={`form-control ${errorAddForm.price ? 'is-invalid' : ''}`}
            name="price"
            onChange={handleChangeInput}
            value={price}
          />
          {errorAddForm.price && <div className="invalid-feedback">{errorAddForm.price}</div>}
          <label htmlFor="amount">จำนวนกี่เล่ม</label>
          <input
            type="number"
            className={`form-control ${errorAddForm.amount ? 'is-invalid' : ''}`}
            name="amount"
            onChange={handleChangeInput}
            value={amount}
          />
          {errorAddForm.amount && <div className="invalid-feedback">{errorAddForm.amount}</div>}
          <label htmlFor="imageUrl">รูปภาพปกหนังสือ</label>
          {showImageCover && (
            <div>
              <img className="imagetext" src={showImageCover} />
              <br />
              <br />
            </div>
          )}

          <input
            type="file"
            className={`form-control ${errorAddForm.imageUrl ? 'is-invalid' : ''}`}
            name="imageUrl"
            onChange={handleChangeFileImageUrl}
          />
          {errorAddForm.imageUrl && <div className="invalid-feedback">{errorAddForm.imageUrl}</div>}
          <label htmlFor="imageCover">รูปภาพปก แบนเนอร์</label>
          {showImageBanner && (
            <div>
              <img className="imagetext" src={showImageBanner} />
              <br />
              <br />
            </div>
          )}

          <input
            type="file"
            className={`form-control `}
            name="imageCoverUrl"
            onChange={handleChangeFileImageBannerUrl}
          />
          <label htmlFor="description">ข้อมูลสินค้า</label>
          <textarea
            className={`form-control `}
            onChange={handleChangeInput}
            name="description"
            value={description}
          ></textarea>
          <button className="btn btn-primary btn-lg btn-block btnSaveStock">Save Books Stock</button>

          {errorAddForm.errBack && <div className="invalid-feedback">{errorAddForm.errBack}</div>}
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}

export default AddBookStock;
