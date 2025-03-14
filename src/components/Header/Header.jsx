import React, { useContext } from 'react';
import classes from './Header.module.css';
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import { Link } from "react-router-dom";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { auth } from '../../Utility/Firebase'; // Import auth for signOut()

function Header() {
  const { state, dispatch } = useContext(DataContext);
  const { basket, user }= state
  // console.log(user);
  
  

  // Safely calculate totalItem with optional chaining to avoid errors if basket is empty or undefined
  const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0) || 0;

  return (
    <section className={classes.fixed}>
      <div className={classes.header_container}>
        {/* Logo */}
        <div className={classes.logo_container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
        </div>

        {/* Delivery Section */}
        <div className={classes.delivery}>
          <span>
            <SlLocationPin />
          </span>
          <div>
            <p>Delivered to</p>
            <span>Ethiopia</span>
          </div>
        </div>

        {/* Search Section */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" />
          <BsSearch size={38} />
        </div>

        {/* Order Section */}
        <div className={classes.order_container}>
          <a href="#" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
              alt="flag"
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </a>

          {/* User Sign-In/Sign-Out */}
          {/* <Link to={!user && "/auth"} >
            <div>
              {user ? (
                <>
                  <p>Hello {user?.email?.split("@")[0]}</p>
                  <span onClick={() => auth.signOut()}>Sign Out</span>
                </>
              ) : (
                <>
                  <p>Hello, Sign In</p>
                  <span>Account & Lists</span>
                </>
              )}
            </div>
          </Link> */}
          <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello, {user?.email?.split("@")[0]}</p>
                    <span
                      onClick={() => auth.signOut()}
                      style={{ cursor: "pointer", color: "red" }}
                    >
                      Sign Out
                    </span>
                  </>
                ) : (
                  <>
                    <p
                      style={{
                        cursor: "pointer",
                        color: "yellow",
                        fontWeight: "bold",
                      }}
                    >
                      Hello,Sign In
                    </p>
                    <span>Account & list</span>
                  </>
                )}
              </div>
            </Link>

          {/* Orders Link */}
          <Link to="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>

          {/* Cart Link */}
          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            <span>{totalItem}</span>
          </Link>
        </div>
      </div>

      {/* Lower Header */}
      <LowerHeader />
    </section>
  );
}

export default Header;

