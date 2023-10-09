"use client";

import { useState, useEffect } from "react";

function Profile() {
  const [user, setUser] = useState({
    token: "",
    user: "",
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
  });

  const { firstName, lastName, phone, email, gender } = user;

  const handleChangeUser = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setUser({
      ...user,
      [name]: value,
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      id: user.id,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      gender: gender,
    };
  };

  return (
    <div className="col-lg-9 col-md-8">
      <div className="dashboard-right card card-body account-right">
        <div className="row">
          <div className="col-md-12">
            <div className="main-title-tab">
              <h4>
                <i className="uil uil-box" />
                My profile
              </h4>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="pdpt-bg">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="control-label">
                        First Name <span className="required">*</span>
                      </label>
                      <input
                        className="form-control border-form-control"
                        type="text"
                        name="firstName"
                        value={user.firstName}
                        onChange={(e) => handleChangeUser(e)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="control-label">
                        Last Name <span className="required">*</span>
                      </label>
                      <input
                        className="form-control border-form-control"
                        type="text"
                        name="lastName"
                        value={user.lastName}
                        onChange={(e) => handleChangeUser(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="control-label">
                        Phone <span className="required">*</span>
                      </label>
                      <input
                        className="form-control border-form-control"
                        type="number"
                        name="phone"
                        value={user.phone}
                        onChange={(e) => handleChangeUser(e)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="control-label">
                        Email Address
                        <span className="required">*</span>
                      </label>
                      <input
                        className="form-control border-form-control "
                        disabled
                        type="email"
                        value={user.email}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-lg-6">
                    <label>Gender</label>
                    <div className="chek-form">
                      <div className="custome-radio form-check-inline">
                        {user.gender === "Male" ? (
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="exampleRadios1"
                            defaultValue="Male"
                            onChange={(e) => handleChangeUser(e)}
                            checked
                          />
                        ) : (
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="exampleRadios1"
                            defaultValue="Male"
                            onChange={(e) => handleChangeUser(e)}
                          />
                        )}
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios1"
                        >
                          Male
                        </label>
                      </div>
                      <div className="custome-radio form-check-inline">
                        {user.gender === "Female" ? (
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="exampleRadios2"
                            defaultValue="Female"
                            onChange={(e) => handleChangeUser(e)}
                            checked
                          />
                        ) : (
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="exampleRadios2"
                            defaultValue="Female"
                            onChange={(e) => handleChangeUser(e)}
                          />
                        )}
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios2"
                        >
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-right">
                    <button type="button" className="btn btn-danger btn-lg">
                      Cencel
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-lg"
                      onClick={handleSubmit}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
