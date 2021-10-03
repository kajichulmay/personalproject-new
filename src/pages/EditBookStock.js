import React from 'react';

function EditBookStock() {
  return (
    <div className="AddBookStock">
      <div className="AddBookContent">
        <form className="form-group formAddStock">
          <label htmlFor="name">ชื่อสินค้า</label>
          <input type="text" className="form-control" id="name" />
          <label htmlFor="volumn">เล่มที่</label>
          <input type="text" className="form-control" id="volumn" />
          <label htmlFor="category">Category</label>
          <select className="form-select">
            <option value="manga">Manga</option>
            <option value="light-novel">LightNovel</option>
          </select>
          <label htmlFor="price">ราคา</label>
          <input type="number" className="form-control" id="price" />
          <label htmlFor="amount">จำนวนกี่เล่ม</label>
          <input type="number" className="form-control" id="amount" />
          <label htmlFor="image">รูปภาพปกหนังสือ</label>
          <input type="file" className="form-control" id="image" />
          <label htmlFor="imageCover">รูปภาพปก แบนเนอร์</label>
          <input type="file" className="form-control" id="imageCover" />
          <label htmlFor="description">เรื่องย่อ</label>
          <textarea className="form-control"></textarea>
          <button type="button" class="btn btn-primary btn-lg btn-block btnSaveStock">
            Save Books Stock
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}

export default EditBookStock;
