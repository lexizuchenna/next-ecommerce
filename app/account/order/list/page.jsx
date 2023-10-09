"use client";

import React from "react";
import Moment from "react-moment";

function List() {
  
  const orderList = [];
  
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
            <div className="pdpt-bg">
              <div className="pdpt-title">
                <h6>Order List</h6>
              </div>
              <div className="order-body10">
                <div class="card card-body account-right">
                  <div class="widget">
                    <div class="order-list-tabel-main table-responsive">
                      <table
                        class="datatabel table table-striped table-bordered order-list-tabel"
                        width="100%"
                        cellspacing="0"
                      >
                        <thead>
                          <tr>
                            <th>Order #</th>
                            <th>Date Purchased</th>
                            <th>Delivery Date</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orderList ? (
                            orderList.map((row, index) => (
                              <tr key={index}>
                                <td>#{row.number}</td>
                                <td>
                                  <Moment format="MMMM Do YYYY">
                                    {row.createdAt}
                                  </Moment>
                                </td>
                                <td>
                                  {row.deliverydate ? (
                                    <Moment format="MMMM Do YYYY">
                                      {row.deliverydate}
                                    </Moment>
                                  ) : (
                                    ""
                                  )}
                                </td>
                                <td>
                                  {row.status === "processing" ? (
                                    <span className="badge badge-info">
                                      In Progress
                                    </span>
                                  ) : row.status === "cancel" ? (
                                    <span className="badge badge-danger">
                                      Canceled
                                    </span>
                                  ) : row.status === "shipping" ? (
                                    <span className="badge btn-primary">
                                      shipping
                                    </span>
                                  ) : row.status === "delieverd" ? (
                                    <span className="badge badge-success">
                                      Delivered
                                    </span>
                                  ) : (
                                    <span className="badge badge-warning">
                                      Delayed
                                    </span>
                                  )}
                                </td>
                                <td>{row.grandtotal}</td>
                                <td>
                                  <Link
                                    className="btn btn-info btn-sm"
                                    to={{
                                      pathname: "/account/order/details",
                                      query: row,
                                    }}
                                  >
                                    <i className="mdi mdi-eye"></i>
                                  </Link>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <p>Loading...</p>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
