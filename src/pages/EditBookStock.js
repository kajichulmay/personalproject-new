import React from 'react';
import { useHistory, useParams } from 'react-router';
import { useState, useEffect, useContext } from 'react/cjs/react.development';
import axios from '../config/axios';

import { CartContext } from '../context/CartContext';
function EditBookStock() {
  const [oneBook, setOneBook] = useState({});
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [volumn, setVolumn] = useState('');
  const [amount, setAmount] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageCoverUrl, setImageCoverUrl] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(true);
  const params = useParams();
  const history = useHistory();
  const [showOptionCategory, setShowOptionCategory] = useState([]);
  const { setToggleUpdateBook, toggleUpdateBook } = useContext(CartContext);
  const [showImageCover, setShowImageCover] = useState(null);
  const [showImageBanner, setShowImageBanner] = useState(null);

  useEffect(() => {
    const fetchOneBook = async () => {
      const res = await axios.get(`/book/${params.bookId}`);
      setOneBook(res.data.BookOne);
      setName(res.data.BookOne.name);
      setPrice(res.data.BookOne.price);
      setCategoryId(res.data.BookOne.categoryId);
      setDescription(res.data.BookOne.description);
      setAmount(res.data.BookOne.amount);
      setVolumn(res.data.BookOne.volumn);
      setImageUrl(res.data.BookOne.imageUrl);
      setImageCoverUrl(res.data.BookOne.imageCoverUrl);
    };
    fetchOneBook();
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

  const handleChangImageUrl = e => {
    setImageUrl(e.target.files[0]);
    setShowImageCover(URL.createObjectURL(e.target.files[0]));
  };

  const handleChangImageCover = e => {
    setImageCoverUrl(e.target.files[0]);
    setShowImageBanner(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmitEditBook = async e => {
    try {
      e.preventDefault();
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
      const res = await axios.put(`/edit-book-stock/${params.bookId}`, formData);
      setToggleUpdateBook(cur => !cur);
      history.push('/update-stock');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="AddBookStock">
      <div className="AddBookContent">
        <form className="form-group formAddStock" onSubmit={handleSubmitEditBook}>
          <label htmlFor="name">ชื่อสินค้า</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor="volumn">เล่มที่</label>
          <input
            type="text"
            className="form-control"
            name="volumn"
            value={volumn}
            onChange={e => setVolumn(e.target.value)}
          />

          <label htmlFor="category">Category</label>
          <select
            className={`form-select`}
            name="categoryId"
            onChange={e => setCategoryId(e.target.value)}
            defaultValue={categoryId}
          >
            {showOptionCategory.map(item => {
              if (item.id === categoryId) {
                return (
                  <option key={item.id} value={item.id} selected>
                    {item.name}
                  </option>
                );
              } else {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              }
            })}
          </select>

          <label htmlFor="price">ราคา</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
          <label htmlFor="amount">จำนวนกี่เล่ม</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
          <label htmlFor="image">รูปภาพปกหนังสือ</label>
          <input type="file" className="form-control" id="image" onChange={handleChangImageUrl} />

          {showImageCover && (
            <div>
              <img className="imagetext" src={showImageCover} />
              <br />
              <br />
            </div>
          )}
          <label htmlFor="imageCover">รูปภาพปก แบนเนอร์</label>
          <input type="file" className="form-control" id="imageCover" onChange={handleChangImageCover} />

          {showImageBanner && (
            <div>
              <img className="imagetext" src={showImageBanner} />
              <br />
              <br />
            </div>
          )}

          <label htmlFor="description">ข้อมูลสินค้า</label>
          <textarea
            className="form-control"
            value={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea>
          <button className="btn btn-primary btn-lg btn-block btnSaveStock">Save Books Stock</button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}

export default EditBookStock;
