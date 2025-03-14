import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing/Landing";
import Auth from "./pages/Auth/Auth";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/Orders/Orders";
import Payment from "./pages/Payment/Payment";
import Results from "./pages/Results/Results";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { Elements } from '@stripe/react-stripe-js'; // Correct component name
import { loadStripe } from '@stripe/stripe-js';
import ProtectedRoute from "./components/ProtectedRoute /ProtectedRoute ";


const stripePromise = loadStripe('pk_test_51R1Ccq2cJHtTio8cD3WVDATbKZrkEz8ksHjrcRo9YRBWL2eJxBmcC2GORiFLoPHgXSStMyze0SqJRbBb4iRs5pTt00JOqf2ysx');


function Router() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={
            <ProtectedRoute msg={"you must log in to access your orders"} redirect={"/orders"}>
              <Orders />
            </ProtectedRoute>
          } />
          {/* <Route path="/payment" element={
            <ProtectedRoute msg={"you must log in to  pay"} redirect={"/payment"}>
              <Elements stripe={stripePromise}>
            <Payment />
      </Elements>
            </ProtectedRoute>
          }  /> */}
          <Route
          path="/payment"
          element={
            <ProtectedRoute
              msg={"You must login to pay"}
              redirect={"/payment"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
