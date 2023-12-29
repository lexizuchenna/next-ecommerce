"use client";

import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import axios from "axios";


// import snackbar from "@utils/snackbar";
import { loginUser } from "@app/redux/features/user/slice";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zAZ0-9-]+)*$/
);

const BASEURL = axios.create({ baseURL: `/api/` });

// const config = {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// };

export default function Login() {
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch()
  
  const [agree, setAgree] = useState(false);
  const [remember, setRemember] = useState(false);
  const [agreeError, setAgreeError] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: typeof window !== "undefined"
    ? window.localStorage.getItem("email")
    : "",
    phone: "",
    password: "",
    confirm_password: "",
  });
  const [switchAuth, setSwitchAuth] = useState("login");
  const [formErrors, setFormErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });

  useEffect(() => {
    document.getElementById("login-form").reset();
  }, []);

  const changeAuth = () => {
    if (switchAuth === "register") {
      const email =
        typeof window !== "undefined"
          ? window.localStorage.getItem("email")
          : "";
      setSwitchAuth("login");
      setFormData((prev) => ({ ...prev, email: email ? email : "" }));
    }
    if (switchAuth === "login") {
      setSwitchAuth("register");
      setFormData((prev) => ({ ...prev, email: "" }));
    }
  };

  const validate = () => {
    if (switchAuth === "register") {
      let errors = [];

      for (let key in formData) {
        let value = formData[key];

        if (value === "") {
          setFormErrors((prev) => ({
            ...prev,
            [key]: "Cannot be blank",
          }));
        }
      }

      Object.keys(formData).map((key, i) => {
        let error = formErrors[key];
        if (error !== "") errors.push(i);
      });

      if (errors.length > 0) return true;
      else return false;
    }
    if (switchAuth === "login") {
      let errors = [];
      if (formData.email === "") {
        setFormErrors((prev) => ({
          ...prev,
          email: "Cannot be blank",
        }));
        errors.push(0);
      }
      if (formData.password === "") {
        setFormErrors((prev) => ({
          ...prev,
          password: "Cannot be blank",
        }));
        errors.push(1);
      }

      if (errors.length > 0) return true;
      else return false;
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prev) => ({ ...prev, [name]: value }));

    switch (name) {
      case "firstname":
        setFormErrors((prev) => ({
          ...prev,
          [name]:
            switchAuth === "register" && value === "" ? "Enter First Name" : "",
        }));
        break;
      case "lastname":
        setFormErrors((prev) => ({
          ...prev,
          [name]:
            switchAuth === "register" && value === "" ? "Enter Last Name" : "",
        }));
        break;
      case "email":
        setFormErrors((prev) => ({
          ...prev,
          [name]: emailRegex.test(value) ? "" : "Invalid email address",
        }));
        break;
      case "phone":
        setFormErrors((prev) => ({
          ...prev,
          [name]:
            switchAuth === "register" && value.length < 11
              ? "Invalid phone number"
              : "",
        }));
        break;
      case "password":
        setFormErrors((prev) => ({
          ...prev,
          [name]:
            switchAuth === "register" && value.length < 6
              ? "Password must be up to 6"
              : "",
        }));
        break;
      case "confirm_password":
        setFormErrors((prev) => ({
          ...prev,
          [name]: value !== formData.password ? "Password doesn't match" : "",
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (switchAuth === "register") {
      const isError = validate();
      if (isError) return;

      if (agree === false) {
        setAgreeError(true);
        return;
      } else setAgreeError(false);

      try {
        const { data } = await BASEURL.post("auth/create-account", formData);

        if (data === "Account created successfully") {
          setFormData((prev) => ({
            ...prev,
            password: "",
            confirm_password: "",
            phone: "",
            firstname: "",
            lastname: "",
          }));
          setSwitchAuth("login");
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (switchAuth === "login") {
      const isError = validate();
      if (isError) return;

      if (remember) {
        localStorage.setItem("email", formData.email);
      }

      dispatch(loginUser(formData))
    }
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
                        <div className="tab-content">
                          <div className="tab-pane active" role="tabpanel">
                            <h5 className="heading-design-h5">
                              {switchAuth === "login"
                                ? "Login to your account"
                                : "Register Now!"}
                            </h5>
                            {switchAuth === "register" && (
                              <>
                                <fieldset className="form-group">
                                  <label>First Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="firstname"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                  />
                                  {formErrors.firstname.length > 0 && (
                                    <span className="errorMessage">
                                      {formErrors.firstname}
                                    </span>
                                  )}
                                </fieldset>
                                <fieldset className="form-group">
                                  <label>Last Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="lastname"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                  />
                                  {formErrors.lastname.length > 0 && (
                                    <span className="errorMessage">
                                      {formErrors.lastname}
                                    </span>
                                  )}
                                </fieldset>
                              </>
                            )}
                            <fieldset className="form-group">
                              <label>Email</label>
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
                            {switchAuth === "register" && (
                              <fieldset className="form-group">
                                <label>Mobile number</label>
                                <input
                                  type="number"
                                  className="form-control"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                />
                                {formErrors.phone.length > 0 && (
                                  <span className="errorMessage">
                                    {formErrors.phone}
                                  </span>
                                )}
                              </fieldset>
                            )}
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
                            {switchAuth === "register" && (
                              <fieldset className="form-group">
                                <label>Confirm Password</label>
                                <input
                                  type="password"
                                  className="form-control"
                                  name="confirm_password"
                                  value={formData.confirm_password}
                                  onChange={handleChange}
                                />
                                {formErrors.confirm_password.length > 0 && (
                                  <span className="errorMessage">
                                    {formErrors.confirm_password}
                                  </span>
                                )}
                              </fieldset>
                            )}
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
                                  id="remember"
                                  onChange={({ target }) => {
                                    setRemember(target.checked);
                                  }}
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="remember"
                                >
                                  Remember me
                                </label>
                              </div>
                            ) : (
                              <div className="custom-control custom-checkbox">
                                {agreeError && (
                                  <span className="errorMessage">
                                    You nust agree to terms & conditions
                                  </span>
                                )}
                                <br />
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="agree"
                                  onChange={({ target }) => {
                                    setAgree(target.checked);
                                  }}
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="agree"
                                >
                                  I Agree with
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
                                onClick={changeAuth}
                                type="button"
                                disabled={switchAuth === "login"}
                              >
                                <i className="mdi mdi-lock" /> Login
                              </button>
                            </li>
                            <li className="nav-item">
                              <button
                                className="nav-link"
                                onClick={changeAuth}
                                disabled={switchAuth === "register"}
                                type="button"
                              >
                                <i className="mdi mdi-pencil" /> Register
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
