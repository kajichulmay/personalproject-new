function BookDetailShop({
  oneBook,
  handleClickAdd,
  amount,
  handleClickDel,
  setSumPrice,
  sumPrice,
  handleClickSubmitBuy,
}) {
  setSumPrice(oneBook.price * amount);

  return (
    <div className="bookShop">
      <div className="insideBooks">
        <p className="nameBook">{oneBook?.name}</p>
        <p className="volumeBlock">เล่ม {oneBook?.volumn} </p>
        <div className="priceResult">
          <p className="priceBook">{oneBook?.price}</p>
          <p className="currency">THB</p>
        </div>
        <div className="btnCount">
          <button className="btnMinus" onClick={handleClickDel}>
            -
          </button>
          <div className="count">{amount}</div>
          <button className="btnPlus" onClick={handleClickAdd}>
            +
          </button>
        </div>
        <div className="buyBtnbooks" onClick={handleClickSubmitBuy}>
          <div className="btnCartShop">
            <i className="bi bi-cart3"></i>
            <p>เพิ่ม</p>
            <p className="numberPrice">{sumPrice}</p>
            <p className="currency">THB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetailShop;
