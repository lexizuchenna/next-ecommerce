"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function RootLayout({ children }) {
  const handleLogout = () => {};
  const pathname = usePathname();
  const mainPath = pathname.split("/").pop();
  return (
    <div id="layoutSidenav_content">
      <main>
        <div className="wrapper">
          <div className="gambo-Breadcrumb">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">Home</li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        User Dashboard
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-group">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="user-dt">
                    <div className="user-img">
                      <img src="/img/avatar/img-5.jpg" alt />
                      <div className="img-add">
                        <input type="file" id="file" />
                        <label htmlFor="file">
                          <i className="uil uil-camera-plus" />
                        </label>
                      </div>
                    </div>
                    <h4>Johe Doe</h4>
                    <p>
                      +91999999999
                      <Link href="#">
                        <i className="uil uil-edit" />
                      </Link>
                    </p>
                    <div className="earn-points">
                      <img src="/img/Dollar.svg" alt />
                      Points : <span>20</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className>
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-4">
                  <div className="left-side-tabs">
                    <div className="dashboard-left-links">
                      <Link
                        href="/account/view"
                        className={`user-item ${
                          mainPath === "view" && "active"
                        }`}
                      >
                        <i className="uil uil-apps" />
                        Overview
                      </Link>
                      <Link
                        href="/account/profile"
                        className={`user-item ${
                          mainPath === "profile" && "active"
                        }`}
                      >
                        <i className="mdi mdi-account-outline" />
                        My profile
                      </Link>
                      <Link
                        href="/account/order/list"
                        className={`user-item ${
                          mainPath === "list" && "active"
                        }`}
                      >
                        <i className="uil uil-box" />
                        My Orders
                      </Link>
                      <Link
                        href="/account/rewards"
                        className={`user-item ${
                          mainPath === "rewards" && "active"
                        }`}
                      >
                        <i className="uil uil-gift" />
                        My Rewards
                      </Link>
                      <Link
                        href="/account/wishlist"
                        className={`user-item ${
                          mainPath === "wishlist" && "active"
                        }`}
                      >
                        <i className="uil uil-heart" />
                        Shopping Wishlist
                      </Link>
                      <Link
                        href="/account/address"
                        className={`user-item ${
                          mainPath === "address" && "active"
                        }`}
                      >
                        <i className="uil uil-location-point" />
                        My Address
                      </Link>
                      <a className={`user-item`} onClick={handleLogout}>
                        <i className="uil uil-exit" />
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RootLayout;
