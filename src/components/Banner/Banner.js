import { useContext, Component } from 'react';
import { AuthContext } from '../../context/authContext';
import BoxImgBanner from './BoxImgBanner';
import Slider from 'react-slick';
import PauseOnHover from './PauseOnHover';
import { CartContext } from '../../context/CartContext';

function Banner() {
  const { bookTransaction } = useContext(CartContext);

  const filterBookNew = [...bookTransaction]
    .sort((a, b) => b.id - a.id)
    .filter(item => item.imageCoverUrl)
    .splice(0, 9);

  return (
    <div className="Banner">
      <div className="contents">
        <PauseOnHover>
          {filterBookNew.map(item => (
            <BoxImgBanner key={item.id} imageCoverUrl={item.imageCoverUrl} bookId={item.id} />
          ))}
        </PauseOnHover>
      </div>
    </div>
  );
}

export default Banner;
