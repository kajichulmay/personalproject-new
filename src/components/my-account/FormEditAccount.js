import axios from '../../config/axios';
import React from 'react';
import { useState } from 'react';

function FormEditAccount({ setIsEditing, setMyAccountUser, myAccountUser, userId }) {
  const [firstName, setFirstName] = useState(myAccountUser.firstName);
  const [lastName, setLastName] = useState(myAccountUser.lastName);
  const [email, setEmail] = useState(myAccountUser.email);
  const [error, setError] = useState('');
  const handleClickCancleEditUser = () => {
    setIsEditing(cur => !cur);
  };

  const handleClickEditForm = async e => {
    e.preventDefault();
    try {
      const newMyAccountUpdate = { ...myAccountUser, firstName, lastName, email };
      setMyAccountUser(newMyAccountUpdate);
      const res = await axios.put(`/myaccount/${userId}`, newMyAccountUpdate);
      setIsEditing(cur => !cur);
    } catch (err) {
      setError(err.response.data.UpdateUserFali);
    }
  };
  return (
    <form onSubmit={handleClickEditForm}>
      <div className="box-edit">
        <span>ชื่อ :</span>
        <input
          type="text"
          className="personalform"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        ></input>
      </div>
      <div className="box-edit">
        <span>นามสกุล :</span>
        <input
          type="text"
          className="personalform"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        ></input>
      </div>
      <div className="box-edit">
        <span>อีเมล์ :</span>
        <input type="email" className="personalform" value={email} onChange={e => setEmail(e.target.value)}></input>
      </div>
      <br />
      <br />
      <div className="btnClickSave">
        <button className="btn btn-primary">แก้ไขข้อมูลส่วนตัว</button>
      </div>
      <div className="btnClickCancle">
        <button type="button" className="btn btn-danger" onClick={handleClickCancleEditUser}>
          ยกเลิก
        </button>
      </div>
      {error && <div className="invalid-feedback">{error}</div>}
    </form>
  );
}

export default FormEditAccount;
