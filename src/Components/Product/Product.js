import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./Product.css";
import { useStateValue } from "../../Content/StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  // .log('this basket',basket)
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon />
            ))}
        </div>
      </div>
      <img src={image} alt="lean" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
