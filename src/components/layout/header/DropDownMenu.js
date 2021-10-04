import { NavLink } from 'react-router-dom';
function DropDownMenu() {
  return (
    <div className="dropdown-menu">
      <div className="line-menu">
        <NavLink to="/myaccount" className="menudropdown">
          ข้อมูลส่วนตัว
        </NavLink>
      </div>
      <div className="line-menu">
        <NavLink to="/myaccount/address" className="menudropdown">
          ที่อยู่ของฉัน
        </NavLink>
      </div>
      <div className="line-menu">
        <NavLink to="/myaccount/myorder" className="menudropdown">
          คำสั่งซื้อ
        </NavLink>
      </div>
      <div className="line-menu">
        <NavLink to="/notice-of-payment" className="menudropdown">
          แจ้งชำระเงิน
        </NavLink>
      </div>
      <div className="line-menu">
        <NavLink to="/update-stock" className="menudropdown">
          อัพเดทสินค้า
        </NavLink>
      </div>
    </div>
  );
}

export default DropDownMenu;
