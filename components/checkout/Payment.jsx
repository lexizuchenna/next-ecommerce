import {useState} from "react";

function Payment() {
    const [paymentmethod, setPaymentMethod] = useState("");
    
    const handleRadioChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePlaceOrder = async (event) => {
    event.preventDefault();
    // Rest of your code for handling the order placement
  };

  const handlePaymentSystem = async (e) => {
    e.preventDefault();
    // Rest of your code for handling payment
  };

  return (
    <div className="checkout-step-body">
      <div className="payment_method-checkout">
        <div className="row">
          <div className="col-md-12">
            <div className="rpt100">
              <ul className="radio--group-inline-container_1">
                <li>
                  <div className="radio-item_1">
                    <input
                      id="cashondelivery1"
                      value="cash"
                      name="paymentmethod"
                      type="radio"
                      onChange={handleRadioChange}
                    />
                    <label htmlFor="cashondelivery1" className="radio-label_1">
                      Cash on Delivery
                    </label>
                  </div>
                </li>
                <li>
                  <div className="radio-item_1" onClick={handlePaymentSystem}>
                    {/* <input value="card" name="paymentmethod" type="button" onClick={handleRadioChange} /> */}
                    <label htmlFor="card1" className="radio-label_1">
                      Pay With Card
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            {paymentmethod === "cash" ? (
              <button
                className="next-btn16 hover-btn"
                onClick={handlePlaceOrder}
              >
                Confirm Order
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
