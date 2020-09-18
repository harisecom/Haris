import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/home';
import CartPage from './pages/cart';
import ShopPage from './pages/shop';
import NotFoundPage from './pages/not-found';
import Footer from './Components/Footer/Footer.component';
import SignInPage from './Components/Sign-In/Sign-In.component';
import SignUp from './Components/Sign-Up/Sign-Up.component';
import { auth } from './firebase/firebase.utils';

class App extends Component{
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user});
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="app-site">
        <div className="content">
          <Router>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/signin" component={SignInPage}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/cart" component={CartPage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="*" component={NotFoundPage} />
              </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;