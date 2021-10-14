import axios from '../../config/axios';
import React from 'react';
import NoticChooseBank from './NoticChooseBank';
import { useState, useEffect, useContext } from 'react/cjs/react.development';
import { useHistory } from 'react-router';
import { CartContext } from '../../context/CartContext';
function FormPayment() {
  const [showOptionBank, setShowOptionBank] = useState([]);
  const [priceOrder, setPriceOrder] = useState({});
  const [showSlip, setShowSlip] = useState(null);
  const [slip, setSlip] = useState('');
  const [bankChoose, setBankChoose] = useState('');
  const [date, setDate] = useState('');
  const { setToggleUpdateCart, bookTransaction } = useContext(CartContext);
  const history = useHistory();
  const [stockBookAmount, setStockBookAmount] = useState([]);

  useEffect(() => {
    const feltBank = async () => {
      const bank = await axios.get('/bank');
      setShowOptionBank(bank.data.getBank);
    };

    feltBank();
  }, []);

  useEffect(() => {
    const feltmyOrder = async () => {
      try {
        const myorder = await axios.get('/order/byId');
        setPriceOrder(myorder.data.myOrder);
      } catch (err) {
        console.dir(err);
      }
    };
    feltmyOrder();
  }, []);
  // console.log(priceOrder);
  const handleChangeInputFileSlip = e => {
    setSlip(e.target.files[0]);
    setShowSlip(URL.createObjectURL(e.target.files[0]));
  };

  const handleClickSubmitNotic = async e => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('orderId', priceOrder.id);
      formData.append('paidTime', date);
      formData.append('picture', slip);
      formData.append('bankId', bankChoose);

      const res = await axios.post('/notice', formData);
      setToggleUpdateCart(cur => !cur);
      history.push('/');
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <div className="detailBlock">
      <form className="formNoticePayment" onSubmit={handleClickSubmitNotic}>
        <h4>แจ้งชำระเงิน</h4>
        <p>รายละเอียดการโอนเงิน</p>
        {showOptionBank.map(item => (
          <NoticChooseBank
            key={item.id}
            name={item.name}
            bankId={item.id}
            imageBank={item.imageUrl}
            onChange={e => setBankChoose(e.target.value)}
          />
        ))}
        <p>จำนวนเงินที่ต้องชำระ</p>
        <p>{priceOrder?.sumPrice || 0}</p>
        <p>วันที่ชำระเงิน</p>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <p>หลักฐานการโอนเงิน</p>
        {showSlip && (
          <div>
            <img className="imagetext" src={showSlip} />
            <br />
            <br />
          </div>
        )}

        <div className="uploadFile">
          <input type="file" className="uploadeFileNotic" onChange={handleChangeInputFileSlip} />
        </div>
        <button className="btnSubmitNotice">แจ้งชำระเงิน</button>
      </form>
    </div>
  );
}

export default FormPayment;
