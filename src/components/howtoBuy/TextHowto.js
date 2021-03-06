import React from 'react';
import { Link } from 'react-router-dom';

function TextHowto() {
  return (
    <div className="textHowto">
      <p className="titleHowto">วิธีการสั่งซื้อสินค้า และ ชำระเงิน</p>
      <p>วิธีการสั่งซื้อสินค้า</p>
      <p>1. เลือกสินค้าที่คุณต้องการโดยหยิบลงตระกร้า</p>
      <p>2. ตรวจสอบรายการสั่งซื้อ ยอดชำระ วิธีการจัดส่ง ให้ถูกต้อง </p>
      <p>
        3. คลิกปุ่ม “สั่งซื้อ” และรอจนกว่าเว็บไซต์โหลดสมบูรณ์ห้ามปิดหรือรีเฟรชเว็บไซต์เพราะอาจทำให้ การสั่งซื้อไม่สำเร็จ
      </p>
      <p>4. ทำการชำระสินค้าและบริการ สามารถเลือกได้ว่าจะชำระเงินในรูปแบบใด</p>
      <p>
        5. แจ้งการชำระเงินผ่านทางเว็บไซต์
        <Link to="/notice-of-payment" className="noticePayment" href="#">
          แจ้งการชำระเงิน
        </Link>
      </p>
      <p>6. เมื่อทางร้านตรวจสอบเรียบร้อยแล้วจะทำการส่งสินค้าให้ทันที</p>
    </div>
  );
}

export default TextHowto;
