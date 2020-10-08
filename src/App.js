import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage.component';
import ProductDetails from './Pages/product-detail/ProductDetail.component';
import NotFoundPage from './Pages/NotFound/NotFound.component';
import Header from './Components/Header/Header.component';
import ShopAll from './Pages/ShopAll/shopAll.component';
import Cart from './Pages/Cart/Cart.component';
import ForgotPassword from './Pages/forgot-password/ForgotPassword.component';
import { connect } from 'react-redux';
import {cartAction} from './Redux/cart/cart-action';
import SignIn from './Pages/SignIn/signIn.component';
import SignUp from './Pages/SignUp/SignUp.component';
import CheckoutPage from './Pages/Checkout/Checkout.component';
import Footer from './Components/Footer/Footer.component';
import { auth, createUserProfileDocument, firestore } from './firebase/firebase.utils';
import { setCurrentUser } from './Redux/user/user-action';
import { updateProducts } from './Redux/products/product-action';
import { updateCategories } from './Redux/category/category-action';



class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.addUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
        this.props.addUser(userAuth);
    });

    const productsRef = firestore.collection('products');
    productsRef.onSnapshot( async (snapShot) => {
      this.updateProductsToRedux(snapShot.docs)   
    });

    const collectionRef = firestore.collection('categories');
    collectionRef.onSnapshot( async (snapshot) => {
      this.updateCategoriesToRedux(snapshot.docs) 
    })

    
  }

  updateCategoriesToRedux = ( snapshot ) =>{
    const updatedCollection = snapshot.map((doc) => doc.data()).reduce(( accumulator, collection) => {
      accumulator[collection.routeName] = collection;
      return accumulator
    }, {})

    this.props.updateCategories(updatedCollection);

  }

  updateProductsToRedux = ( snapShot) =>{
    const updatedProducts = snapShot.map((doc) => doc.data());
    this.props.updateProducts(updatedProducts);
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
          <Route path="/shop" component={ShopAll} />
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
  updateProducts: (products) => dispatch(updateProducts(products)),
  addUser: user => dispatch(setCurrentUser(user)),
  updateCategories : categories => dispatch(updateCategories(categories))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  addUser: PropTypes.func,
  cartAction: PropTypes.func,
  cartStatus: PropTypes.bool,
};
