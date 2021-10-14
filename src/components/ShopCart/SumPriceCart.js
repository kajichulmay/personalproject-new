import { useContext } from 'react/cjs/react.development';
import { CartContext } from '../../context/CartContext';
function SumPriceCart({ setSumPriceAllCart, sumPriceAllCart }) {
  const { cartItem } = useContext(CartContext);
  const sumPriceCart = cartItem.reduce((acc, item) => (acc += +item.Book.price * item.sumAmount), 0);
  setSumPriceAllCart(sumPriceCart);
  return (
    <div className="boxSumprice">
      <span>ราคาสุทธิ</span>
      <span>{sumPriceAllCart}</span>
    </div>
  );
}

export default SumPriceCart;
