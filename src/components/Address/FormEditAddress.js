import axios from '../../config/axios';
import { useState } from 'react/cjs/react.development';

function FormEditAddress({ setIsEdiiting, setMyAccountUser, myAccountUser, userId }) {
  const [address, setAddress] = useState(myAccountUser.address);
  const [error, setError] = useState('');
  const handleClickSaveFormAddress = async e => {
    e.preventDefault();
    try {
      const updateAddress = { ...myAccountUser, address };
      setMyAccountUser(updateAddress);
      const res = await axios.put(`/myaccount/address/${userId}`, updateAddress);
      setIsEdiiting(cur => !cur);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };
  const handleClickCancleEditAddress = () => {
    setIsEdiiting(cur => !cur);
  };

  return (
    <form onSubmit={handleClickSaveFormAddress}>
      <textarea className="textAddress" value={address} onChange={e => setAddress(e.target.value)}></textarea>
      <br />
      <br />
      <div className="btnClickSave">
        <button className="btn btn-primary">แก้ไขที่อยู่จัดส่ง</button>
      </div>
      <div className="btnClickCancle">
        <button type="button" className="btn btn-danger" onClick={handleClickCancleEditAddress}>
          ยกเลิก
        </button>
      </div>
      {error && <div className="invalid-feedback">{error}</div>}-
    </form>
  );
}
export default FormEditAddress;
