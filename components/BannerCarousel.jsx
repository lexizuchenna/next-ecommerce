// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import Category from "./Category";

function BannerCarousel() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Category />
      {/* <Slider {...settings}>
        <div className="owl-item">
          <img src="img/banners/offer-1.jpg" alt="supermarket" />
        </div>
        <div className="owl-item">
          <img src="img/banners/offer-2.jpg" alt="supermarket" />
        </div>
        <div className="owl-item">
          <img src="img/banners/offer-3.jpg" alt="supermarket" />
        </div>
      </Slider> */}
      Mag
    </div>
  );
}

export default BannerCarousel
