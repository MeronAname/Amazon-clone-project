import React, { useContext } from "react";
import classes from "./Cart.module.css";
import LayOut from "../../components/Layout/Layout";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/Action.type";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function Cart() {
  const { state , dispatch} = useContext(DataContext);
  const {basket}=state
  const total = basket.reduce((amount, item) => {
    return amount + item.price * item.amount; 
  }, 0);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>No items in your Cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className={classes.cart_product}>
                  <ProductCard
                    key={i}
                    product={item}
                    renderAdd={false}
                    renderDesc={true}
                    flex={true}
                  />
                  <div className={classes.btn_container}>
                    <button
                      className={classes.btn}
                      type=""
                      onClick={() => increment(item)}
                    >
                      <IoIosArrowUp size={25}/>
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={classes.btn}
                      type=""
                      onClick={() => decrement(item.id)}
                    >
                      <IoIosArrowDown size={25} />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal({basket?.length} items):</p>

              <CurrencyFormat amount={total} />
            </div>

            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>

            <Link to="/payment">continue to check out</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
