"use client";

function Address() {
  const user = "";
  return (
    <div className="col-lg-9 col-md-8">
      <div className="dashboard-right">
        <div className="row">
          <div className="col-md-12">
            <div className="main-title-tab">
              <h4>
                <i className="uil uil-location-point" />
                My Address
              </h4>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="pdpt-bg">
              <div className="pdpt-title">
                <h4>My Address</h4>
              </div>
              <div className="address-body">
                <a
                  href="#"
                  className="add-address hover-btn"
                  data-toggle="modal"
                  data-target="#address_model"
                >
                  Add New Address
                </a>
                {user ? (
                  user.Addresses.map((row, index) => (
                    <div className="address-item" key={index}>
                      <div className="address-icon1">
                        <i className="uil uil-home-alt" />
                      </div>
                      <div className="address-dt-all">
                        {/* <h4>Home</h4> */}
                        <p>
                          #
                          {row.shipping +
                            " , " +
                            row.area +
                            " , " +
                            row.city +
                            " , " +
                            row.discrict +
                            " , " +
                            row.states}
                        </p>
                        <ul className="action-btns">
                          <li>
                            <a href="#" className="action-btn">
                              <i className="uil uil-edit" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="action-btn">
                              <i className="uil uil-trash-alt" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
