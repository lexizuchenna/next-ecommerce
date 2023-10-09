"use client";

import { useState, useEffect } from "react";
// import { GetUserLogin } from "../../components/services";
// import { NotificationManager } from "react-notifications";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zAZ0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

export default function Login() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
  });
  const [password, setPassword] = useState("");
  const [switchAuth, setSwitchAuth] = useState("login");
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    firstName: "",
  });

  useEffect(() => {
    document.getElementById("login-form").reset();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setFormErrors({
          ...formErrors,
          email: emailRegex.test(value) ? "" : "Invalid email address",
        });
        setEmail(value);
        break;
      case "password":
        setFormErrors({
          ...formErrors,
          password: value.length < 6 ? "Minimum 6 characters required" : "",
        });
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { email, password };

    // if (formValid({ formErrors, email, password })) {
    //   let user = await GetUserLogin.getUserLogin(data);
    //   if (user) {
    //     NotificationManager.success("Login successful", "Login");
    //     await GetUserLogin.authenticate(user.token, email);
    //   } else {
    //     NotificationManager.error(
    //       "Please check your email and password",
    //       "Input Error"
    //     );
    //   }
    // } else {
    //   NotificationManager.error("Please check your login", "Input Error");
    // }
  };

  return (
    <div>
      <div className="modal fade login-modal-main" id="bd-example-modal">
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body">
              <div className="login-modal">
                <div className="row">
                  <div className="col-lg-6 pad-right-0">
                    <div className="login-modal-left"></div>
                  </div>
                  <div className="col-lg-6 pad-left-0">
                    <button
                      type="button"
                      className="close close-top-right"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">
                        <i className="mdi mdi-close" />
                      </span>
                      <span className="sr-only">Close</span>
                    </button>
                    <form id="login-form" onSubmit={handleSubmit} noValidate>
                      <div className="login-modal-right">
                        {/* Tab panes */}
                        <div className="tab-content">
                          <div
                            className="tab-pane active"
                            id="login"
                            role="tabpanel"
                          >
                            <h5 className="heading-design-h5">
                              {switchAuth === "login"
                                ? "Login to your account"
                                : "Register Now!"}
                            </h5>
                            {switchAuth === "register" && (
                              <fieldset className="form-group">
                                <label>First Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="firstName"
                                  value={formData.firstName}
                                  onChange={handleChange}
                                />
                                {formErrors.firstName.length > 0 && (
                                  <span className="errorMessage">
                                    {formErrors.firstName}
                                  </span>
                                )}
                              </fieldset>
                            )}
                            <fieldset className="form-group">
                              <label>Enter Email/Mobile number</label>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                              />
                              {formErrors.email.length > 0 && (
                                <span className="errorMessage">
                                  {formErrors.email}
                                </span>
                              )}
                            </fieldset>
                            <fieldset className="form-group">
                              <label>Enter Password</label>
                              <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                              />
                              {formErrors.password.length > 0 && (
                                <span className="errorMessage">
                                  {formErrors.password}
                                </span>
                              )}
                            </fieldset>
                            <fieldset className="form-group">
                              <button
                                type="submit"
                                className="btn btn-lg btn-secondary btn-block"
                              >
                                {switchAuth === "login"
                                  ? "Login to your account"
                                  : "Create Your Account"}
                              </button>
                            </fieldset>
                            {switchAuth === "login" ? (
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck1"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customCheck1"
                                >
                                  Remember me
                                </label>
                              </div>
                            ) : (
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck2"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customCheck2"
                                >
                                  I Agree with{" "}
                                  <a href="#">Term and Conditions</a>
                                </label>
                              </div>
                            )}
                          </div>
                          
                        </div>
                        <div className="clearfix" />
                        <div className="text-center login-footer-tab">
                          <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                              <button
                                className="nav-link active"
                                data-toggle="tab"
                                role="tab"
                                onClick={() => setSwitchAuth("login")}
                              >
                                <i className="mdi mdi-lock" /> LOGIN
                              </button>
                            </li>
                            <li className="nav-item">
                              <button
                                className="nav-link"
                                data-toggle="tab"
                                onClick={() => setSwitchAuth("register")}
                                role="tab"
                              >
                                <i className="mdi mdi-pencil" /> REGISTER
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </form>
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
