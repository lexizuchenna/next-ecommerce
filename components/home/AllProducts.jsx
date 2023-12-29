"use client"

import Slider from "react-slick";
// import "./index.css";

function AllProducts() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* New Item slider */}
      <section className="product-items-slider section-padding">
        <div className="container" id="header-category-bk">
          <div className="section-header">
            <span>For You</span>
            <h5 className="heading-design-h5">
              Top Stample{" "}
              {/* <span className="badge badge-primary">20% OFF</span> */}
              <a className="float-right text-secondary">View All</a>
            </h5>
          </div>
          <Slider {...settings}>{/* Items */}</Slider>
        </div>
      </section>
      {/* End New item slider */}
    </div>
  );
}

export default AllProducts;
