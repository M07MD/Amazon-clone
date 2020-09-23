import React from "react";
import { useStateValue } from "../../contexts/StateProvider";
import "./Checkout.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      {basket?.length === 0 ? (
        <div>
          <h2>your shopping basket is empty</h2>
          <p>you have no items in your basket.</p>
        </div>
      ) : (
        <div>
          <h2>you have {basket.length} items in your shopping basket</h2>
          {basket.map((item, index) => (
            <CheckoutProduct
              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              Quantity={item.Quantity}
            />
          ))}
        </div>
      )}

      {basket.length > 0 && (
        <div className="checkoutSubtotal">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
