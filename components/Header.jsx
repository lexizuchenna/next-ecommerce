"use client";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useJwt } from "react-jwt";
import Image from "next/image";
import Link from "next/link";

import { logoutUser } from "@app/redux/features/user/slice";

import Loader from "./Loader";
import CartSidebar from "./CartSidebar";
import Auth from "./Auth";

function Header() {
  const dispatch = useDispatch();
  const { user, userMessage } = useSelector((state) => state.user);
  const [searchtxt, setSearchtxt] = useState("");
  const [isClient, setIsClient] = useState(false);
  const { isExpired } = useJwt(user?.token || "");

  const handleChange = (e) => {
    setSearchtxt(e.target.value);
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

  const toggleMenu = () => {
    document.querySelector(".dropdown-menu").classList.toggle("show")
  }

  useEffect(() => {
    setIsClient(true)
    console.log(isExpired)
    if (isExpired) {
      return dispatch(logoutUser());
    }
    // console.log(user);
  }, []);
  


  return (
    <div >
      {!isClient && <Loader />}
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
              <Image src="/img/logo.svg" width={80} height={80} alt="logo" />
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
                    {isClient && user?.token ? (
                      <div className="dropdown">
                        <button
                          className="btn btn-account"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          onClick={toggleMenu}
                        >
                          {user?.username} &nbsp;
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
                            onClick={toggleMenu}
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
                          <div className="dropdown-divider"></div>
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
      <Auth />
    </div>
  );
}

export default Header;
