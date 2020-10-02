import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { auth } from './firebase';
import { useStateValue } from './Content/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import CheckOut from './Components/Checkout/Checkout';
import Payment from './Components/Payment/Payment';
import Orders from './Components/Orders/Orders';
import Footer from './Components/Footer/Footer';
import SearchProduct from './Components/SearchProduct/SearchProduct';

const promise = loadStripe('pk_test_D33JqlQh8XboaXKYPEqh4GXe')
function App() {
  const [{}, dispatch] =useStateValue();
  useEffect (()=>{
    // will only runs when the app components loads
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        // the user just logged in or the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        // the user is log out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route
            exact 
            path="/searchProduct"
            component = {SearchProduct}
          />
        <Route path="/orders">
          <Header />
          <Orders />
        </Route>
        <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <CheckOut />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
