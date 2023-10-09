"use client";

import React from "react";
import Moment from "react-moment";

function Detail() {
  const list = {
    Addresses: [],
  };
  return (
    <div className="col-lg-9 col-md-8">
      <div className="dashboard-right">
        <div className="row">
          <div className="col-md-12">
            <div className="main-title-tab">
              <h4>
                <i className="uil uil-box" />
                My Orders
              </h4>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            {list ? (
              <div className="pdpt-bg">
                <div className="pdpt-title">
                  <h6>
                    Delivery Timing :{" "}
                    {list.deliverydate ? (
                      <Moment format="MMMM Do YYYY">{list.deliverydate}</Moment>
                    ) : (
                      ""
                    )}
                  </h6>
                </div>
                <div className="order-body10">
                  <div className="table-responsive">
                    <table className="table ucp-table table-hover">
                      <thead>
                        <tr>
                          <th style={{ width: 130 }}>#</th>
                          <th>Image</th>
                          <th>Item</th>
                          <th style={{ width: 150 }} className="text-center">
                            Price
                          </th>
                          <th style={{ width: 150 }} className="text-center">
                            Qty
                          </th>
                          <th style={{ width: 100 }} className="text-center">
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {list ? (
                          list.Addresses.map((prop) => {
                            return prop.Carts.map((p, index) => (
                              <tr key={index}>
                                <td>{p.id}</td>
                                <td>
                                  <img
                                    src={p.photo}
                                    alt="cartimage"
                                    style={{ height: "50px" }}
                                  />
                                </td>
                                <td>{p.name}</td>
                                <td className="text-center">
                                  &#8377;{p.price}
                                </td>
                                <td className="text-center">{p.qty}</td>
                                <td className="text-center">
                                  &#8377;{p.total}
                                </td>
                              </tr>
                            ));
                          })
                        ) : (
                          <p>loading...</p>
                        )}
                      </tbody>
                    </table>
                  </div>

                  <div className="total-dt">
                    <div className="total-checkout-group">
                      <div className="cart-total-dil">
                        <h4>Sub Total</h4>
                        <span>&#8377;{list ? list.grandtotal : ""}</span>
                      </div>
                      <div className="cart-total-dil pt-3">
                        <h4>Delivery Charges</h4>
                        <span>Free</span>
                      </div>
                    </div>
                    <div className="main-total-cart">
                      <h2>Total</h2>
                      <span>&#8377;{list ? list.grandtotal : ""}</span>
                    </div>
                  </div>
                  <div className="track-order">
                    <h4>Track Order</h4>
                    <div className="bs-wizard" style={{ borderBottom: 0 }}>
                      {/* <div
                                className={
                                  list.status === "processing"
                                    ? "bs-wizard-step"
                                    : "bs-wizard-step complete"
                                }
                              >
                                <div className="text-center bs-wizard-stepnum">
                                  Placed
                                </div>
                                <div className="progress">
                                  <div className="progress-bar" />
                                </div>
                                <a href="#" className="bs-wizard-dot" />
                              </div> */}
                      <div
                        className={
                          list.status === "processing"
                            ? "bs-wizard-step complete"
                            : list.status === "shipping"
                            ? "bs-wizard-step complete"
                            : list.status === "delieverd"
                            ? "bs-wizard-step complete"
                            : "bs-wizard-step"
                        }
                      >
                        {/* complete */}
                        <div className="text-center bs-wizard-stepnum">
                          Packed
                        </div>
                        <div className="progress">
                          <div className="progress-bar" />
                        </div>
                        <a href="#" className="bs-wizard-dot" />
                      </div>
                      <div
                        className={
                          list.status === "shipping"
                            ? "bs-wizard-step complete"
                            : list.status === "delieverd"
                            ? "bs-wizard-step complete"
                            : "bs-wizard-step"
                        }
                      >
                        {/* complete */}
                        <div className="text-center bs-wizard-stepnum">
                          On the way
                        </div>
                        <div className="progress">
                          <div className="progress-bar" />
                        </div>
                        <a href="#" className="bs-wizard-dot" />
                      </div>
                      <div
                        className={
                          list.status === "delieverd"
                            ? "bs-wizard-step complete"
                            : "bs-wizard-step"
                        }
                      >
                        {/* active */}
                        <div className="text-center bs-wizard-stepnum">
                          Delivered
                        </div>
                        <div className="progress">
                          <div className="progress-bar" />
                        </div>
                        <a href="#" className="bs-wizard-dot" />
                      </div>
                    </div>
                  </div>
                  <div className="alert-offer">
                    <img src="images/ribbon.svg" alt />
                    Cashback of will be credit to Gambo Super Market wallet 6-12
                    hours of delivery.
                  </div>
                  <div className="call-bill">
                    <div className="delivery-man">
                      <a href="#">
                        <i className="uil uil-rss" />
                        Feedback
                      </a>
                    </div>
                    <div className="order-bill-slip">
                      <a href="#" className="bill-btn5 hover-btn">
                        View Bill
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
