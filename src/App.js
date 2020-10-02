import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage.component';
import ProductDetails from './Pages/product-detail/ProductDetail.component';
import NotFoundPage from './Pages/NotFound/NotFound.component';
import Header from './Components/Header/Header.component';
import ShopAll from './Pages/ShopAll/ShopAll.component';
import Cart from './Pages/Cart/Cart.component';
import ForgotPassword from './Pages/forgot-password/ForgotPassword.component';
import { connect } from 'react-redux';
import {cartAction} from './Redux/cart/cart-action';
import SignIn from './Pages/SignIn/SignIn.component';
import SignUp from './Pages/SignUp/SignUp.component';
import CheckoutPage from './Pages/Checkout/Checkout.component';
import Footer from './Components/Footer/Footer.component';
import { auth, createUserProfileDocument, firestore } from './firebase/firebase.utils';
import { userAction } from './Redux/user/user-action';
import { updateProducts } from './Redux/products/product-action';
import { setCurrentUser } from './Redux/user/user-action';


class App extends Component {

  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }
      this.setState({ currentUser: userAuth });
    });

    const productsRef = firestore.collection('products');
    productsRef.onSnapshot( async (snapShot) => {
      this.updateProductsToRedux(snapShot.docs)   
    });

  }

  updateProductsToRedux = ( snapShot) =>{
    const updatedProducts = snapShot.map((doc) => doc.data());
    this.props.updateProducts(updatedProducts);
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    const {cartStatus, cartAction} = this.props;
      return (
        <div>
        <Header />
        <Cart />
        {cartStatus === true ? (
          <div className="cartOpen" onClick={cartAction}></div>
        ) :  null}
        <Router>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/forgotPassword" component={ForgotPassword} />
              <Route path="/product/:id" component={ProductDetails} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/checkout" component={CheckoutPage} />
              <Route path="/shop" component={ShopAll} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </Router>
          <Footer />
        </div>
      );
  }
}

const mapStateToProps = ({cart}) => ({
  cartStatus : cart.cartStatus,
});

const mapDispatchToProps = dispatch => ({
  cartAction: () => dispatch(cartAction()),
  updateProducts: (products) => dispatch(updateProducts(products)),
  addUser: user => dispatch(setCurrentUser(user)), 
})

export default connect(mapStateToProps,mapDispatchToProps)(App);

App.propTypes = {
  addUser: PropTypes.func,
  cartAction: PropTypes.func,
  cartStatus: PropTypes.bool,
};