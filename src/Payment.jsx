import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

const Payment = () => {
  const [{ basket }, dispatch] = useStateValue();
  const user = {
    email: "gharteyjerome@gmail.com",
  };
  return (
    <>
      <Header />
      <div className="payment">
        <div className="payment__container">
          <h1>
            Checkout (<Link to="/checkout">{basket?.length} items</Link>)
          </h1>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
              <p>{user?.email} </p>
              <p>123 React Lane</p>
              <p>Accra, Ghana</p>
            </div>
          </div>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Review items and delivery</h3>
            </div>
            <div className="payment__items">
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment__detail">{/* Stripe */}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
