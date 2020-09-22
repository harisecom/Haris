import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import ProductDetails from './pages/product-detail/product-detail.component';
import NotFoundPage from './pages/not-found';
import Header from './Components/Header/Header';
import Cart from './pages/Cart/Cart';
import ForgotPassword from './pages/forgot-password/forgot-password';
import { connect } from 'react-redux';
import {cartAction} from './Redux/cart/cart-action';
import SignIn from './pages/SignIn/signIn.component';
import SignUp from './pages/SignUp/SignUp.component';
import Footer from './Components/Footer/Footer.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { userAction } from './Redux/user/user-action';


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
        });
      }
      this.setState({ currentUser: userAuth });
    });
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
        { cartStatus === true ?
                      <div className="cartOpen" onClick={cartAction}></div> :
                      null
        }
        <Router>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/forgotPassword" component={ForgotPassword} />
              <Route path="/product/:id" component={ProductDetails} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </Router>
          <Footer />
        </div>
        
        )
  }

  
}

const mapStateToProps = ({cart}) => ({
  cartStatus : cart.cartStatus
})

const mapDispatchToProps = dispatch => ({
    cartAction: () => dispatch(cartAction()),
    addUser: user => dispatch(userAction(user)) 
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
