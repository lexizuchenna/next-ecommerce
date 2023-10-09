"use client";

import { useState, useEffect } from "react";

function Delivery() {
  const [locationList, setLocationList] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    district: "",
    city: "",
    area: "",
    states: "",
    address: "",
  });

  const { name, phone, district, city, area, states, address } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let delivery = {
      name: name,
      phone: phone,
      district: district,
      city: city,
      area: area,
      states: states,
      address: address,
    };
    onSelectDeliveryAddress(delivery);
  };

  useEffect(() => {
    const fetchLocationDetails = async () => {
      try {
        const location = ""
        if (location) {
          setLocationList(location.data);
        } else {
          NotificationManager.error("Data is empty", "Data");
        }
      } catch (error) {
        console.error("Error fetching location details:", error);
      }
    };

    fetchLocationDetails();
  }, []);
  return (
    <div className="card-body">
      <form>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label className="control-label">
                Full Name <span className="required">*</span>
              </label>
              <input
                className="form-control border-form-control"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="control-label">
                Phone <span className="required">*</span>
              </label>
              <input
                type="number"
                className="form-control border-form-control"
                name="phone"
                value={phone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label className="control-label">
                State <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-control border-form-control"
                name="states"
                value={states}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="control-label">
                District <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-control border-form-control"
                name="district"
                value={district}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label className="control-label">
                City <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-control border-form-control"
                name="city"
                value={city}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="control-label">
                Area <span className="required">*</span>
              </label>
              <input
                className="form-control border-form-control"
                type="text"
                name="area"
                value={area}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="form-group">
              <label className="control-label">
                Shipping Address <span className="required">*</span>
              </label>
              <textarea
                className="form-control border-form-control"
                name="address"
                value={address}
                onChange={handleChange}
              />
              <small className="text-danger">
                Please provide the number and street.
              </small>
            </div>
          </div>
        </div>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
          className="btn btn-secondary mb-2 btn-lg"
          onClick={handleSubmit}
        >
          NEXT
        </button>
      </form>
    </div>
  );
}

export default Delivery;
