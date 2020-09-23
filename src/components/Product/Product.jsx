import React, { useState } from "react";
import "./product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../../contexts/StateProvider";

const Product = ({ id, title, price, rating, image, Quantity }) => {
  const [{ basket }, dispatch] = useStateValue();
  const [quantity, setQuantity] = useState(Quantity);

  const addToBasket = () => {
    // Quantity--;

    setQuantity(quantity - 1);

    if (quantity === 0) {
      setQuantity(0);
      alert("this item sold out");
      return;
    }

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
        Quantity: quantity,
      },
    });
  };

  return (
    <div className="Product">
      <div className="product_info">
        <p>{title}</p>

        <p className="price">
          <small>$</small> <strong>{price}</strong>
        </p>

        <p className="price">
          <small>available Quantity</small>{" "}
          <strong>{quantity === 0 ? "sold out" : quantity}</strong>
        </p>

        <div className="rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <StarIcon />
              </p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
