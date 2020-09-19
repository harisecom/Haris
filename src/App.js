import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import ProductDetails from './Pages/product-detail/product-detail.component';
import NotFoundPage from './Pages/not-found';
import Header from './Components/Header/Header';
import Cart from './Pages/Cart/Cart';
import ForgotPassword from './Pages/forgot-password/forgot-password';
import { connect } from 'react-redux';
import {cartAction} from './Redux/cart/cart-action';
import SignInPage from './Pages/SignIn/signIn.component';
import Footer from './Components/Footer/Footer.component';


function App({cartStatus, cartAction}) {


  return (
  <div>
  <Header />
  <Cart />
  { cartStatus === true ?
                <div className="cartOpen" onClick={cartAction}></div> :
                null
  }
  <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/signin" component={SignInPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
    <Footer />
  </div>
  
  );
}

const mapStateToProps = ({cart}) => ({
  cartStatus : cart.cartStatus
})

const mapDispatchToProps = dispatch => ({
    cartAction: () => dispatch(cartAction())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
