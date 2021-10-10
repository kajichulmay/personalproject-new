import { useContext } from 'react';
import FormEditAccount from './FormEditAccount';
import BoxAccount from './BoxAccount';
import { AuthContext } from '../../context/authContext';
import { useState } from 'react/cjs/react.development';
function BoxUserEdit() {
  const { myAccountUser, setMyAccountUser } = useContext(AuthContext);
  const { firstName, lastName, email } = myAccountUser;
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="boxUserEdit">
      <div className="account-edit">
        <br />
        <br />
        <p style={{ textAlign: 'center', width: '100%' }}>ข้อมูลส่วนตัว</p>
        {isEditing ? (
          <FormEditAccount setIsEditing={setIsEditing} />
        ) : (
          <BoxAccount firstName={firstName} lastName={lastName} email={email} setIsEditing={setIsEditing} />
        )}
        <br />
        <br />
      </div>
    </div>
  );
}

export default BoxUserEdit;
