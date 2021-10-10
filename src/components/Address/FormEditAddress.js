function FormEditAddress({ setIsEdiiting }) {
  const handleClickCancleEditAddress = () => {
    setIsEdiiting(cur => !cur);
  };

  return (
    <>
      <textarea className="textAddress"></textarea>
      <br />
      <br />
      <div className="btnClickSave">
        <button type="button" className="btn btn-primary">
          แก้ไขที่อยู่จัดส่ง
        </button>
      </div>
      <div className="btnClickCancle" onClick={handleClickCancleEditAddress}>
        <button type="button" class="btn btn-danger">
          ยกเลิก
        </button>
      </div>
    </>
  );
}
export default FormEditAddress;
