import React from "react";
import { useStateValue } from "../../contexts/StateProvider";
import CurrencyFromat from "react-currency-format";

import "./Subtotal.css";
import { getBasketTotal } from "../../contexts/reducer";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFromat
        renderText={(value) => (
          <>
            <p>
              subtotal ({basket.length} items): <strong>{`${value} $`}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prfix={"$"}
      />
      <button>Proceed To Checkout</button>
    </div>
  );
};

export default Subtotal;
