import Slider from 'react-slick';

function PauseOnHover({ children }) {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    // arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default PauseOnHover;
