import React from 'react';

function BoxAddress({ address, setIsEdiiting }) {
  const handleClickEditAddress = () => {
    setIsEdiiting(cur => !cur);
  };

  return (
    <>
      <p>{address}</p>

      <div className="btnClickEdit" onClick={handleClickEditAddress}>
        <i className="fas fa-pencil-alt"></i>
        <span>เพิ่มที่อยู่</span>
      </div>
    </>
  );
}

export default BoxAddress;
