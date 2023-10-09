// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

function Category() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
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
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div style={{ background: "#fff" }}>
      <div className="container" id="header-category-bk">
        {/* <Slider {...settings}>
          <div className="item">
            <div className="category-item">
              <Link href="/shop/grocery-staples">
                <img
                  className="img-fluid"
                  src="/img/category/grocerystample.jpg"
                  alt="grocery-stamples"
                />
                <h6>Grocery &amp; Staples</h6>
              </Link>
            </div>
          </div>
          <div className="item">
            <div className="category-item">
              <Link href="/shop/personal-care">
                <img
                  className="img-fluid"
                  src="/img/category/personalcare.png"
                  alt="personalcare"
                />
                <h6>Personal Care</h6>
              </Link>
            </div>
          </div>
          <div className="item">
            <div className="category-item">
              <Link href="/shop/household-items">
                <img
                  className="img-fluid"
                  src="/img/category/household.png"
                  alt="household-imtes"
                />
                <h6>Household Needs</h6>
              </Link>
            </div>
          </div>
          <div className="item">
            <div className="category-item">
              <Link href="/shop/home-kitchen">
                <img
                  className="img-fluid"
                  src="/img/category/kitchen.png"
                  alt="kitchen"
                />
                <h6>Home &amp; Kitchen</h6>
              </Link>
            </div>
          </div>
          <div className="item">
            <div className="category-item">
              <Link href="/shop/beverages">
                <img
                  className="img-fluid"
                  src="/img/category/beverage.png"
                  alt="beverages"
                />
                <h6>Beverages</h6>
              </Link>
            </div>
          </div>
          <div className="item">
            <div className="category-item">
              <Link href="/shop/breakfast-dairy">
                <img
                  className="img-fluid"
                  src="/img/category/breakfastdairy.png"
                  alt="breakfastdairy"
                />
                <h6>Breakfast &amp; Dairy</h6>
              </Link>
            </div>
          </div>
          <div className="item">
            <div className="category-item">
              <Link href="/shop/biscuits-snacks-chocolates">
                <img
                  className="img-fluid"
                  src="/img/category/Biscuits.png"
                  alt="biscuits-snacks-chocklates"
                />
                <h6>Biscuits, Snacks &amp; Chocolates</h6>
              </Link>
            </div>
          </div>
          <div className="item">
            <div className="category-item">
              <Link href="/shop/noodles-sauces-instant-food">
                <img
                  className="img-fluid"
                  src="/img/category/noodles.png"
                  alt="noodles"
                />
                <h6>Noodles, Sauces &amp; Instant Food</h6>
              </Link>
            </div>
          </div>
          <div className="item">
            <div className="category-item">
              <Link href="/shop/pet-care">
                <img
                  className="img-fluid"
                  src="/img/category/petcare.png"
                  alt="pet-care"
                />
                <h6>Pet Care</h6>
              </Link>
            </div>
          </div>
          <div className="item">
            <div className="category-item">
              <Link href="/shop/baby-care">
                <img
                  className="img-fluid"
                  src="/img/category/babycare.png"
                  alt="baby-care"
                />
                <h6>Baby Care</h6>
              </Link>
            </div>
          </div>
        </Slider> */}
      </div>
    </div>
  );
}

export default Category;
