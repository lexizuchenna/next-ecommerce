"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import CartSidebar from "./CartSidebar";
import Login from "./Auth";

function Header() {
  const [state, setState] = useState({
    token: "",
    userName: "",
    searchtxt: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    await GetUserLogin.logout();
  };

  const handleClickSearch = (event) => {
    event.preventDefault();
    const { searchtxt } = state;
    props.history.push(`/product/catalogsearch/result/${searchtxt}`);
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   let cookies = await GetUserLogin.isAuthenticate();
    //   setState({ ...state, token: cookies });
    //   let email = sessionStorage.getItem("email");
    //   if (email) {
    //     let user = await GetUserLogin.getCustomerDetail(email);
    //     if (user) {
    //       setState({ ...state, userName: user.data.firstName });
    //     }
    //   }
    // };
    // fetchData();
  }, [state]);

  const { token, userName, searchtxt } = state;

  return (
    <div>
      <header className="header clearfix">
        <div className="navbar-top bg-success pt-2 pb-2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 text-center">
                <a href="/" className="mb-0 text-white">
                  20% cashback for new users | Code:
                  <strong>
                    <span className="text-light">
                      OGOFERS13 <span className="mdi mdi-tag-faces" />
                    </span>
                  </strong>
                </a>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-light navbar-expand-lg bg-dark bg-faded osahan-menu">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">
              <Image src="/img/logo.svg" width={80} height={80}  />
            </Link>
            <div className="navbar-collapse" id="navbarNavDropdown">
              <div className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto top-categories-search-main">
                <div
                  className="top-categories-search"
                  onSubmit={handleClickSearch}
                >
                  <div className="input-group">
                    <input
                      className="form-control"
                      placeholder="Search products in Your City"
                      aria-label="Search products in Your City"
                      type="text"
                      name="searchtxt"
                      value={searchtxt}
                      onChange={(e) => handleChange(e)}
                    />
                    <span className="input-group-btn">
                      <button
                        className="btn btn-secondary"
                        type="submit"
                        onClick={handleClickSearch}
                      >
                        <i className="mdi mdi-file-find" /> Search
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="my-2 my-lg-0">
                <ul className="list-inline main-nav-right">
                  <li className="list-inline-item">
                    {token ? (
                      <div className="dropdown">
                        <button
                          className="btn btn-account"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {userName} &nbsp;
                          <i className="mdi mdi-arrow-up-drop-circle mdi-flip-v mdi-18px" />
                        </button>

                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <Link className="dropdown-item" href="/account/view">
                            <i className="uil uil-apps" /> Dashboard
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="/account/profile"
                          >
                            <i
                              className="mdi mdi-account-outline"
                              aria-hidden="true"
                            />
                            My Profile
                          </Link>

                          <Link
                            className="dropdown-item"
                            href="/account/wishlist"
                          >
                            <i
                              className="mdi mdi-heart-outline"
                              aria-hidden="true"
                            />
                            Wish List
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="/account/order/list"
                          >
                            <i
                              className="mdi mdi-format-list-bulleted"
                              aria-hidden="true"
                            />
                            Orders List
                          </Link>
                          <div className="dropdown-divider" />
                          <span
                            className="dropdown-item"
                            onClick={handleLogout}
                          >
                            <i className="mdi mdi-lock" aria-hidden="true" />
                            Logout
                          </span>
                        </div>
                      </div>
                    ) : (
                      <button
                        data-target="#bd-example-modal"
                        data-toggle="modal"
                        className="btn btn-link"
                      >
                        <i className="mdi mdi-account-circle" /> Login/Sign Up
                      </button>
                    )}
                  </li>
                  <li className="list-inline-item cart-btn">
                    <CartSidebar />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Login />
    </div>
  );
}

export default Header;
