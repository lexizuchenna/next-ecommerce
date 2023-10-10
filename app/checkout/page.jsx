"use client";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Delivery from "@components/checkout/Delivery";
import Payment from "@components/checkout/Payment";
// import Loader from "@components/Loader";


function CheckOut() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [subTotal, setSubTotal] = useState("");
  const [discount, setDiscount] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [grandTotal, setGrandTotal] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const cartItems = [];

  useEffect(() => {
    const fetchData = async () => {
      let cart = cartItems;
      let subTotal = cart.reduce((sum, i) => (sum += i.qty * i.netPrice), 0);
      let discount = cart.reduce((sum, i) => (sum += i.discount), 0);
      let grandTotal = subTotal + discount + deliveryCharge;

      setSubTotal(subTotal);
      setDiscount(discount);
      setGrandTotal(grandTotal);
    };

    fetchData();
  }, [cartItems, deliveryCharge]);

  return (
    <div>
      <section
        className="checkout-page section-padding"
        style={{ paddingTop: "190px" }}
      >
        <div className="container">
          {/* {isLoaded ? <Loader /> : ""} */}
          <div className="row">
            <div className="col-md-8">
              <div className="checkout-step">
                <div className="accordion" id="accordionExample">
                  <div className="card checkout-step-two">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <span className="number">2</span> Delivery Address
                        </button>
                      </h5>
                    </div>
                    <Delivery />
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <span className="number">3</span> Payment
                          <i className="mdi mdi-checkbox-marked-circle-outline" />
                        </button>
                      </h5>
                    </div>
                    <Payment />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h5 className="card-header">
                  My Cart
                  <span className="text-secondary float-right">
                    ({cartItems.length} item)
                  </span>
                </h5>
                {cartItems.map((row, index) => (
                  <div className="card-body pt-0 pr-0 pl-0 pb-0" key={index}>
                    <div className="cart-list-product">
                      <img className="img-fluid" src={row.photo} alt="cart" />
                      <span className="badge badge-success">
                        {row.discountPer}% OFF
                      </span>
                      <h5>{row.name}</h5>
                      <h6>
                        <strong>
                          <span className="mdi mdi-approval" /> Available in
                        </strong>
                        - {row.unitSize} gm
                      </h6>
                      <p className="offer-price mb-0">
                        &#x20B9;{row.qty + "*" + row.netPrice}
                        <i className="mdi mdi-tag-outline" />
                        <span className="regular-price">
                          &#x20B9;{row.price}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
                <div className="total-checkout-group">
                  <div className="cart-total-dil">
                    <h4>Sub Total</h4>
                    <span>&#x20B9;{subTotal}</span>
                  </div>
                  <div className="cart-total-dil pt-3">
                    <h4>Delivery Charges</h4>
                    <span>&#x20B9;{deliveryCharge}</span>
                  </div>
                </div>
                <div className="cart-total-dil saving-total ">
                  <h4>Total Saving</h4>
                  <span>&#x20B9;{discount}</span>
                </div>
                <div className="main-total-cart">
                  <h2>Total</h2>
                  <span>&#x20B9;{grandTotal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CheckOut;
