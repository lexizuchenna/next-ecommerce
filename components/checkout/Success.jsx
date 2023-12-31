"use client";

import { useEffect } from "react";


function Success() {
  useEffect(() => {
    const fetchData = async () => {
      var url_string = window.location;
      var url = new URL(url_string);
      var paymentIntent = url.searchParams.get("payment_intent");
      var paymentIntentClientSecret = url.searchParams.get(
        "payment_intent_client_secret"
      );
      var redirectStatus = url.searchParams.get("redirect_status");
      var data = {
        paymentIntent: paymentIntent,
        paymentIntentClientSecret: paymentIntentClientSecret,
        redirectStatus: redirectStatus,
      };
      if (redirectStatus === "failed") {
        window.location.href = "https://www.innercord.com/failed";
      } else {
        
        // await Coupon.getPaymentSuccess(data);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {/* --------------------- Contact Page Starts --------------------------*/}

      {/* START SECTION BREADCRUMB */}
      <section className="breadcrumb-bg mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 text-center">
              <div className="page-title">
                <i className="fa fa-check tick-circle" aria-hidden="true"></i>

                <h1>Thank You</h1>
                <p className="col-sm-6 mx-auto">
                  Congratulations! Your payment has been successfully completed.
                  Please go to my courses to start learning.
                </p>
              </div>

              <a href="/my-courses" className="theme-btn mt-4">
                Go to my courses
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION BREADCRUMB */}

      {/* START SECTION CONTACT */}
      <section className="pt-5">
        <div className="container">
          <div className="row"></div>
        </div>
      </section>
      {/* END SECTION CONTACT */}

      {/* --------------------- Contact Page Starts --------------------------*/}
    </div>
  );
}

export default Success;
