import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage.component';
import ProductDetails from './Pages/product-detail/ProductDetail.component';
import NotFoundPage from './Pages/NotFound/NotFound.component';
import Header from './Components/Header/Header.component';
import Cart from './Pages/Cart/Cart.component';
import PropTypes from 'prop-types';
import ForgotPassword from './Pages/forgot-password/ForgotPassword.component';
import {connect} from 'react-redux';
import {cartAction} from './Redux/cart/cart-action';
import SignIn from './Pages/SignIn/signIn.component';
import SignUp from './Pages/SignUp/SignUp.component';
import Footer from './Components/Footer/Footer.component';
import {auth} from './firebase/firebase.utils';
import {userAction} from './Redux/user/user-action';
import CheckoutPage from './Pages/Checkout/Checkout.component';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.props.addUser(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const {cartStatus, cartAction} = this.props;
    return (
      <div>
        <Header />
        <Cart />
        {cartStatus === true ? (
          <div className="cartOpen" onClick={cartAction}></div>
        ) : null}
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({cart}) => ({
  cartStatus: cart.cartStatus,
});

const mapDispatchToProps = dispatch => ({
  cartAction: () => dispatch(cartAction()),
  addUser: user => dispatch(userAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  addUser: PropTypes.func,
  cartAction: PropTypes.func,
  cartStatus: PropTypes.bool,
};
