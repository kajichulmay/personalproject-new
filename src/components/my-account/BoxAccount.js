function BoxAccount({ firstName, lastName, email, setIsEditing }) {
  const handleClickEditUser = () => {
    setIsEditing(true);
  };
  return (
    <>
      <div className="box-edit">
        <span>ชื่อ :</span>
        <span className="valueName">{firstName}</span>
      </div>
      <div className="box-edit">
        <span>นามสกุล :</span>
        <span className="valueName">{lastName}</span>
      </div>
      <div className="box-edit">
        <span>อีเมล์ :</span>
        <span className="valueName">{email}</span>
      </div>
      <div className="btnClickEdit" onClick={handleClickEditUser}>
        <i className="fas fa-pencil-alt"></i>
        <span>แก้ไขข้อมูลส่วนตัว</span>
      </div>
    </>
  );
}

export default BoxAccount;
