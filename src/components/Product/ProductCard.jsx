import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import classes from "./Product.module.css";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { DataContext } from "../../components/DataProvider/DataProvider"
import { Type } from "../../Utility/Action.type";

function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const { image, title, rating, id, price, description } = product; //destructuring method
  // const [count, rate]= rating
  const {state, dispatch} = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,

      item: {
        image,
        title,
        rating,
        id,
        price,
        description,
      },
      // item is the product object above on line 8
    });
  };
  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`product/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          <Rating
            // name="read-only"
            value={rating?.rate}
            precision={0.2}
            // readOnly
          />

          <small>{rating?.count}</small>
        </div>

        <div>
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
